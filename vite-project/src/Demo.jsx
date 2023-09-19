
const Demo=(props)=>{
console.log(props)


return(
<>
<h2>Heading 2 of Demo part</h2>
<p>message 1: {props.message1}</p>
<p>message 2 :{props.message2}</p>
</>
);
if (props.message1 === 5) {
    return <div>Success Message: {props.message1}</div>;
  } else if (props.message2 === 'isString') {
    return <div>Error Message: {props.message2}</div>;
  } else {
    return <div>Default Message: {props.message}</div>;
  }

}

export default Demo