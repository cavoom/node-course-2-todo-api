var getUser = (id, callback)=>{ // getUser is a function with two parameters
    var user = {
        id: id,
        name: 'dave'
    }
    setTimeout(()=>{ // simulate a delay of 3 seconds. After the delay callback is arm
        callback(user); // when user is available, we can respond to the getUser request below
    }, 3000);
};

getUser(31, (userObject) => { // this is the function that we hand to the callback to run
                                // so we expect to get data from callback that we are calling userObject
    console.log('I got this back: ',userObject);
});