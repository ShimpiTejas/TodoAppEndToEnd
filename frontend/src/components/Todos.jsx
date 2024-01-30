/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */


export const Todos = ({todos}) => {
  return (
    <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.tite}</h1>
                <h2>{todo.description}</h2>
                <button onClick={function(){
            fetch("http://localhost:3000/completed",{
                method : "PUT",
                body : JSON.stringify({
                    id : todo.id
                }),
                headers:{
                    "content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo Updated!!");
            })
        }}>{todo.completed == true? "Completed" : " Mark as Complete"} </button>
                </div>
        })}
    </div>
  )
}
