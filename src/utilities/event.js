function getMatch(str, regex) {
  return (str.match(regex) || [])[0];
}

function stripHTMLTags(html) {
  return html != null ? html.replace(/(<([^>]+)>)/ig, '') : null;
}

export const getEventDescriptions = event => {
  // Get the first paragraph, which should be bolded.
  const title = getMatch(event.description, /<p><b>.*?<\/b><\/p>/);
  // See if this title is split with a `: ` to divide into a main and sub title
  const [mainTitle, subTitle] = title.split(': ');

  // Get the byline, which should be the second paragraph which is inner-wrapped with <i>
  // (There's also an annoying <br /> that appears from Meetup's WYSIWYG, so we handle that too.)
  const byline = getMatch(
    event.description,
    /<p>(?:<br(?:\s*)\/>)*<i>.*?<\/i><\/p>/
  );

  // Get the rest of the description by removing strings against an eqivalent regex to the above.
  const description = event.description.replace(
    /<p><b>(.|[\r\n])*?<\/i><\/p>/,
    ''
  );

  const firstParagraph = getMatch(description, /<p>.*?<\/p>/);

  return {
    mainTitle: stripHTMLTags(mainTitle),
    subTitle: stripHTMLTags(subTitle),
    byline: stripHTMLTags(byline),
    description: firstParagraph,
  };
};
