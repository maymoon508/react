import Hello from "./Hello";
import Hello2 from "./Hello2";

function Condition3(){
    let isLogin = true;

    return(
        <>
            {isLogin ? <Hello /> : <Hello />}
        </>
    );

}

export default Condition3;