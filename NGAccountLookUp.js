// Account Number Check ==> NG Account Look up

function async(number) {
    //validate input is ONLY a number
    const reg = /^\d+$/;
    if(number === !reg || number == !isNaN ) {
    
    //validate imput lenght to be 10 chars ONLY
    number.length() === 10
    //parse number into an array
    number.push()
    //slice number array into 2 parts
    //Assing first part to a const A
    //Second part into const B
    const A = number.slice(0, 2);
    const B = number.slice(2, 10);
    //Convert const A and B back to numbers
    const numA = A.parseint()
    const numB = B.parseint()
    // Use a Switch State to find the Bank name given const numA
    Switch
    //Assign Bank nane from const numA to a variable BANK

    //
    //Make a call to paystack api parsing `number` and `BANK
    //Await response from PayStack containing User Name details
    //Assign response from PayStack to a variable const USER
    //Return the varaible as the final response
    return USER;
    } return console.log(`Please enter a Valid 10 digit account number`)
    
}