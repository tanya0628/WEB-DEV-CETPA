// // async function fetchData() {
// //   try {
// //     const response = await fetch("./index.json");

// //     if (!response.ok) {
// //       throw new Error(`HTTP error! status: ${response.status}`);
// //     }
// //     const data = await response.json();
// //     displayApi(data);
// //   } catch (error) {
// //     console.log(error);
// //     document.querySelector(newdata).innerText = "Error is fetching;";
// //   }
// // }

// // function displayApi(users) {
// //   const ele = document.getElementById("newdata");
// //   ele.innerHTML = "";

// //   users.forEach((user) => {
// //     const userContainer = document.createElement("div");

// //     userContainer.innerHTML = `${user.name} and ${user.email} and ${user.username}`;

// //     ele.appendChild(userContainer);
// //   });
// // }
// // fetchData();







// fetching images 

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https:// jsonplaceholder.typicode.com/photos"
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     //   const data = await response.json();
//     //   displayApi(data);

//     const imageData = await response.blob();
//     displayApi(imageData);
//   } catch (error) {
//     console.log(error);
//     document.querySelector(newdata).innerText = "Error is fetching;";
//   }
// }

// function displayApi() {
//   const ele = document.getElementById("");
// }
// fetchData();
