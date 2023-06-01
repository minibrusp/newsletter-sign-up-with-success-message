import HeadingText from "../HeadingText/HeadingText"
import Paragraph from "../paragraph/paragraph"
import List from "../List/List"

export default function SectionTextContent({ headingText, paragraphText, listItems }) {
  return (
    <div className="home__text-content flex flex-col justify-center items-start gap-6">
      <HeadingText text={headingText} />
      <Paragraph text={paragraphText} />
      { listItems && (
        <List listItems={listItems} />
      )}
    </div>
  )
}
