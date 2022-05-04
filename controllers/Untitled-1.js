

const person = {
    name: 'John',
    favoriteColor: 'black',
    hobbies: ['painting', 'running', 'archery'],
    // _id: (ObjectId'alskja;lweiufaldkfj')
}


function printPerson({name, favoriteColor, hobbies}) {
    
    console.log(`Hi my name is ${name}. I like the color ${favoriteColor}. My hobbies include ${hobbies.join(", ")}.`)
}



printPerson(person)




server = express();


// const someFunctionThatRespondstoTheRequest = (req, res) => res.json({message: ';hi'})

// server.get('/someurlthattheusercalls', someFunctionThatRespondstoTheRequest )