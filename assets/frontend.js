$(document).ready(function() {

    // Add Burger to Database Button
    $("#addburger").on("click", function(){
      console.log("Add Burger Button Clicked");
  
  //     // Create an Object to be Sent to the Backend
  //     let burger = {
  //       "burger_name": $(burgerName).val(),
  //       "devoured": $(burgerName).data("eaten")
  //     };
  
  //     $.ajax("api/burger", burger,{
  //         method: "POST",
  //         data: burger
  //     }).then(function(data){
  //         console.log("added a new burger", data);
  //         location.reload();
  //     })
  
  //   }); // End of Create New Burger
  
  //   // Update Burger from Database Button
  
  //   $(".burgerBlock").on("click", function(){
  //     console.log("Button Clicked");
  
  //     const burgerID = $(this).data("id");
  //     const devoured = $(this).data("eaten");
  
  //     const burgerUpdate = {
  //       "devoured": devoured
  //     };
  
  //     console.log("button id is " + burgerID);
  
  //     $.ajax("/api/burger/" + burgerID, {
  //       type: "PUT",
  //       data: burgerUpdate
  //     }).then((response)=>{
  //       console.log("Burger Updated", response);
  //       location.reload();
  //     });
  
  //   }); // End of Devour it Button
  
  });
})