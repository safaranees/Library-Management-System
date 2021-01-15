const fetchUsers=(callback)=>{
    let usersObj=[];

    fetch("http://localhost:15000/SpringMVCHibernateCRUD/employee/fetchData").then(
        res=>{
            console.log(res.json()
              .then(endRes=>{callback(endRes); return endRes}))
            
        })
        .catch(err=>console.log(err))
        
        }
    const insertUser=(posts,callback)=>{
        
            
        const id = posts.id;
        const apiUrl = `http://localhost:3000/posts/${id}`;
        fetch(apiUrl).then(data => {if (data.status >  400){
        alert("invalid user")};return data.json()}).then(data=> callback(posts,data)).catch(err => console.log(err));
    }

    

    const deleteUser=(id)=>{
        const apiUrl = `http://localhost:3000/posts/${id}`;
        try{
            fetch (apiUrl, {
                method : "DELETE"
            }).then(data => {
                return data.json();
            }).then(data => console.log("data Successfully deleted"));
        }catch(err){
            console.log(err);
        }
    }   
    
    
    const getUsers=(callback)=> {
        const apiUrl = 'http://localhost:3000/posts/';
        fetch(apiUrl).then((response) => response.json())
            .then((data) => callback(data));
    }

    
    const insertUsers=(posts)=>{
        fetch("http://localhost:3000/posts",{
            method:'POST',
            body:JSON.stringify(posts),
            headers:{
                'content-type':'application/json'
            }
        }
        ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))
            
        
    }
    export {fetchUsers,insertUser,deleteUser,getUsers,insertUsers}