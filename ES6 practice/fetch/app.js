import "isomorphic-fetch";

fetch('http://jsonplaceholder.typicode.com/comments')
.then((res)=> res.json())
.then(json => {
  const newArr = [];
  json.forEach(item => {
    let {postId, body} = item;
    newArr.push({"postId": postId, "body": body})
  })
  const filtered = newArr.filter(items => {
    return items.body.length <= 100; // taking body length as 100 as there are no items in the api whose body's length is less than 50
  })
  console.log(`Below is the list of comments in which the length of the body is less than 100 characters:
  `, filtered)
  let ob = []
  let count = 0
  for (let i = 0; i< filtered.length; i++) {
    if (ob.includes(filtered[i].postId));
    else {
        ob.push(filtered[i].postId)
        count++
      }
    // console.log(ob)
  }
  console.log(`
  The total count of unique posts with respect to the Post ID is:  ${count}`)
})
