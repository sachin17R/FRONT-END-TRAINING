const myBooks=[];           //global array created

function addItem(item){
    myBooks.push(item)
}

const getAll = () => myBooks;   //creating a lambda

const deleteItem = (index) => myBooks.splice(index,1)

const update = function(index, item){

    myBooks[index] = item;

}