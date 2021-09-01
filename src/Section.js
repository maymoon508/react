// 객체 : props.childeren
// 구조 분해 할당 : {childeren}

function Section(props){
    return(
        <Section className="section">
            {props.children}
        </Section>
    );
}


export default Section;