import react,{createContext,useReducer} from "react";
import {Reducer} from "./Reducer";

// const books:any=[
//         {
//             id:1,
//             title:"The Accursed God",
//             author:"Vivek Dutta Mishra",
//             price:200,
//             rating:5,
//             description:"An Epic Story",
//             cover:"https://instalyrics.com/wp-content/uploads/2020/12/The-Accursed-God.jpg"
//         },
//         {
//             id:2,
//             title:"Harry Potter and the Philosopher's Stone",
//             author:"JK Rowling",
//             price:200,
//             rating:5,
//             description:"Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel, followed by the subsequent six titles in the Harry Potter series, as well as three books written for charity: Fantastic Beasts and Where to Find Them, Quidditch Through the Ages and The Tales of Beedle the Bard. The Harry Potter novels have now sold over 450 million copies worldwide and been translated into 78 languages.",
//             cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9nrOnN8sYfZZHJ06EIBSoEO5qjx7uHHEs6VtKNplGVuGhZuC"
//         },
//         {
            
//             id:3,
//             title:"Harry Potter and the Harry Potter and the Chamber of Secrets",
//             author:"JK Rowling",
//             price:200,
//             rating:5,
//             description:"Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
//             cover:"https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg"
//         },
//         {
//             id:4,
//             title:"Kane and Abel",
//             author:"Jeffrey Archer",
//             price:200,
//             rating:5,
//             description:"They had only one thing in common . . . William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. Two men born on the same day, on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune. A memorable story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save – and finally destroy – each other. ‘The ultimate novel of sibling rivalry’ Dan Brown.",
//             cover:"https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg" 
//         }
//     ];
//  export const BookContext=createContext(books);

//  export const BookProvider=(props:any)=>{
//      const [state,dispatch]=useReducer(Reducer,books);
     
//     //  const deleteBook=(index:any):any=>{
//     //      dispatch({
//     //          type:"DELETE_BOOK",
//     //          payload:index
//     //      })
//     //  }
     
//      return(
//          <BookContext.Provider value={{state,dispatch}}>
//              {props.children}
//          </BookContext.Provider>
//      )
//  }

//  const books:any=[
//     {
//         id:1,
//         title:"The Accursed God",
//         author:"Vivek Dutta Mishra",
//         price:200,
//         rating:5,
//         description:"An Epic Story",
//         cover:"https://instalyrics.com/wp-content/uploads/2020/12/The-Accursed-God.jpg"
//     },
//     {
//         id:2,
//         title:"Harry Potter and the Philosopher's Stone",
//         author:"JK Rowling",
//         price:200,
//         rating:5,
//         description:"Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel, followed by the subsequent six titles in the Harry Potter series, as well as three books written for charity: Fantastic Beasts and Where to Find Them, Quidditch Through the Ages and The Tales of Beedle the Bard. The Harry Potter novels have now sold over 450 million copies worldwide and been translated into 78 languages.",
//         cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9nrOnN8sYfZZHJ06EIBSoEO5qjx7uHHEs6VtKNplGVuGhZuC"
//     },
//     {
        
//         id:3,
//         title:"Harry Potter and the Harry Potter and the Chamber of Secrets",
//         author:"JK Rowling",
//         price:200,
//         rating:5,
//         description:"Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
//         cover:"https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg"
//     },
//     {
//         id:4,
//         title:"Kane and Abel",
//         author:"Jeffrey Archer",
//         price:200,
//         rating:5,
//         description:"They had only one thing in common . . . William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. Two men born on the same day, on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune. A memorable story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save – and finally destroy – each other. ‘The ultimate novel of sibling rivalry’ Dan Brown.",
//         cover:"https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg" 
//     }
// ];
export const BookContext=react.createContext<any>({});

export const BookProvider=(props:any)=>{
 const [state,dispatch]=useReducer(Reducer,{},()=>{
     return {
       books:[
        {
            "id":"1",
           "title" :"The Accursed God",
            "author":"Vivek Dutta Mishra",
            "price":"200",
            "rating":"4",
           "description":"An Epic Story",
            "cover":"https://instalyrics.com/wp-content/uploads/2020/12/The-Accursed-God.jpg"
        },
        {
            "id":"2",
            "title":"Harry Potter and the Philosopher's Stone",
            "author":"JK Rowling",
            "price":"300",
            "rating":"5",
            "description":"Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel, followed by the subsequent six titles in the Harry Potter series, as well as three books written for charity: Fantastic Beasts and Where to Find Them, Quidditch Through the Ages and The Tales of Beedle the Bard. The Harry Potter novels have now sold over 450 million copies worldwide and been translated into 78 languages.",
            "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9nrOnN8sYfZZHJ06EIBSoEO5qjx7uHHEs6VtKNplGVuGhZuC"
        },
        {
            
            "id":"3",
            "title":"Harry Potter and the Chamber of Secrets",
            "author":"JK Rowling",
            "price":"500",
            "rating":"3",
            "description":"Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
            "cover":"https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg"
        },
        {
            "id":"4",
            "title":"Kane and Abel",
            "author":"Jeffrey Archer",
            "price":"190",
            "rating":"2.5",
            "description":"They had only one thing in common . . . William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. Two men born on the same day, on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune. A memorable story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save – and finally destroy – each other. ‘The ultimate novel of sibling rivalry’ Dan Brown.",
            "cover":"https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg" 
        }
    ],
    users:[
        {
            "name":"Jeni Anna Lalu",
            "email":"jeni@gmail.com",
            "password":"12345"
        },
        {
            "name":"Shivani Singh",
            "email":"shivani@gmail.com",
            "password":"12345"
        }
    ],
    isLoggedIn:false,
    token:"",
    searchText:"",
    selected:""

 }});
 
//  const deleteBook=(index:any):any=>{
//      dispatch({
//          type:"DELETE_BOOK",
//          payload:index
//      })
//  }
 
 return(
     <BookContext.Provider value={{state,dispatch}}>
         {props.children}
     </BookContext.Provider>
 )
}