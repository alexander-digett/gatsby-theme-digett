import React from "react";
import showdown from "showdown"

const converter = new showdown.Converter()


const MarkdownConverter = ({markdown}) => (
  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdown) }} />
)

export default MarkdownConverter