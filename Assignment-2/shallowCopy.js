const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
//Create a shallow copy of user
let copyuser={...user}
// Change name in the copied object
copyuser.name="ramu"
//change preferences.theme in the copied object
copyuser.preferences.theme="light"
// .Log both original and copied objects
console.log(user)
console.log(copyuser)

/*changes
Changing normal values like name affects only the
copied object, but changing values 
inside another object (like preferences) affects
both the original and copied objects
 */