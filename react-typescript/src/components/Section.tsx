import { ReactNode} from 'react'
type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({title = "Hello", children}: SectionProps) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{children}</p>
        </>
    );
}
 
export default Section;