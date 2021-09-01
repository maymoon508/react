function Hello2({hello}){
    // 자바스크립트 변수 형태
    let name = 'React';
    return(
        <>
             <section class="section01" id="section01">
                Hello {name} in Hello Component
             </section>
             <section class="section02" id="section02">
                Hello {name} in Hello Component
            </section>
        </>
    );
}

export default Hello2;