

function LoadPage(PageUrl){
    $("#shopperHeading").css("display", "block")
    $.ajax({
        method:"get", 
        url:PageUrl,
        success:function(data){
            $("section").html(data)
        }
    })
}
function LoadForm(PageUrl){
    $.ajax({
        method:"get",
        url:PageUrl,
        success:function(data){
            $("#customerContainer").html(data)
        }
    }) 
}

function LoadProducts(path){
    $.ajax({
        method:"get",
        url:path,
        success:function(data){
            $.each(data, (property, value)=>{
                $(`
                <div class="row p-2">
                    <div class="col-3">
                        <div></div>
                       <img src=${value.image} width="100%" height="300">
                    </div>

                    <div class="col-6">
                        <div style="font-size: 22px">${value.title}</div>
                        <div><span style="font-size: 10px" class="bi bi-star-fill p-1 bg-success text-white rounded"> ${value.rating.rate}</span> ${Math.round(value.rating.rate*100)} ratings & ${value.rating.count} reviews</div>
                        <div class="mt-3"><p>${value.description}</p></div>
                        <br><br>
                        <div class="mt-4">
                            <button class="btn btn-danger bi bi-cart" id="btnAddToCart" name="${value.id}" value="${value.title}"> ADD TO CART</button>
                            <button class="btn btn-success bi bi-lightning"> BUY NOW</button>
                        </div>
                    </div>

                    <div class="col-3">
                        <div style="font-size: 25px"><b>₹ ${Math.round(value.price*82.34)}</b></div>
                        <div style="font-size: 17px">
                        <span>
                            <del>₹ ${Math.round(value.price*82.34*2)}</del>
                            <span class="text-success"> &nbsp; 50% off</span>
                        </span>
                        </div>
                        <div class="mt-3">
                            <div>Free delevery</div>
                            <div style="font-size: 17px">Upto <b>₹ 200</b> off on Exchange</div>
                            <div class="text-success" style="font-size: 17px">Bank offer</div>
                        </div>
                    </div>
                </div><hr>
                `).appendTo("#productContainer");
            })
        }
    })
}



$(function(){
    LoadPage("home.html");
    LoadProducts("http://localhost:8989/products");
    $(`<div class="modal-footer">
        <button class="btn btn-link" id="btnSignin" data-bs-dismiss="modal">Sign in</button>
    </div>`).appendTo("#customersProfileDetails");

    $("#btnHome").click(function(){
        LoadPage("home.html");
        LoadProducts("http://localhost:8989/products")
    })
    $("#btnCustomer").click(function(){
        LoadPage("customer.html");
        LoadForm("userRegister.html");
    })

    $(document).on("click", "#navbtnRegister", function(){
        LoadForm("UserRegister.html");
    })

    $(document).on("click", "#navbtnLogin", function(){
        LoadForm("UserLogin.html")
    })

    $(document).on("click", "#btnExistingLogin", function(){
        LoadForm("Userlogin.html");
    })

    $(document).on("click", "#btnNewUser", function(){
        LoadForm("UserRegister.html");
    })

    $(document).on("click", "#btnShippingHome", function(){
        LoadPage("home.html")
        LoadProducts("http://localhost:8989/products")
    })

    $(document).on("click", "#btnSignin", function(){
        LoadPage("customer.html");
        LoadForm("UserLogin.html");
    })
    //========//

    $(document).on("click", "#btnRegister", function(){
        $("#userIdError").html("");
        var customer = {
            UserId: $("#txtId").val(),
            UserName: $("#txtUserName").val(),
            Password: $("#txtPassword").val(),
            Email : $("#txtMail").val(),
            Age: parseInt($("#txtAge").val()),
            Mobile: $("#txtMobile").val()
        };
        if($("#txtId").val()==""){
            $("#userIdError").html("Please Enter User Id").css("color", "red");
            $("#txtId").focus();
        } else if($("#txtUserName").val()==""){
            $("#userNameError").html("Please Enter Username").css("color", "red");
            $("#userIdError").html("");
            $("#txtUserName").focus();
        } else if($("#txtPassword").val()==""){
            $("#userPassError").html("Please Enter Password").css("color", "red");
            $("#userNameError").html("");
            $("#txtPassword").focus();
        } else if($("#txtMail").val()==""){
            $("#userMailError").html("Please Enter Email").css("color", "red");
            $("#userPassError").html("");
            $("#txtMail").focus();
        } else{
            $.ajax({
                method:"post",
                url:"http://localhost:8989/customersRegistration",
                data:customer
            })
            alert("Registration Successfull..");
            LoadForm("userLogin.html");
        }
    })
    //=========//

    $(document).on("keyup", "#txtId", function(){
        $.ajax({
            method:"get",
            url:"http://localhost:8989/customers",
            success:function (data){
               for(var item of data){
                if(item.UserId==$("#txtId").val()){
                    $("#userIdError").html("User Id Already Taken Please Try Another").css("color", "red");
                    break;
                    } else{
                    $("#userIdError").html("UserId Available").css("color", "green");
                    }
               }
            }
        })
    })
    //===============//

    $(document).on("keyup", "#txtMail", function(){
        $.ajax({
            method:"get",
            url:"http://localhost:8989/customers",
            success:function (data){
               for(var item of data){
                if(item.Email==$("#txtMail").val()){
                    $("#userMailError").html("User Id Already Taken Please Try Another").css("color", "red");
                    break;
                    } else{
                    $("#userMailError").html("UserId Available").css("color", "green");
                    }
               }
            }
        })
    })
    //================//

    $(document).on("click", "#btnLogin", function(){
        if($("#logtxtId").val()===""){
            $("#loginError").html("Please Enter User Id");
            $("#logtxtId").focus();
        } else if($("#logtxtPassword").val()==""){
            $("#loginError").html("Please Enter Password");
            $("#logtxtPassword").focus();
        } else{
            $.ajax({
                method:"get",
                url:"http://localhost:8989/customers",
                success:function(data){
                    $.each(data, (property, value)=>{
                        if($("#logtxtId").val()===value.UserId && $("#logtxtPassword").val()===value.Password){
                            alert("Login Succesfully...");
                            $.cookie("USERID", $("#logtxtId").val());
                            LoadPage("home.html");
                            LoadProducts("http://localhost:8989/products");
                            if($.cookie==undefined){
                                $("#CustomerId").html("");
                                LoadPage("home.html");
                                LoadProducts("http://localhost:8989/products");
                                $("#customersProfileDetails").html("");
                                $(`
                                <div>
                                    <button class="btn btn-link">Sign in</button>
                                </div>
                                `).appendTo("#customersProfileDetails")
                            } else{
                                $("#CustomerId").html(`Hello! ${$.cookie("USERID")}`);
                                LoadPage("home.html");
                                LoadProducts("http://localhost:8989/products"); 
                                $("#customersProfileDetails").html("");
                                $(`
                                <div>
                                    <dl>
                                        <dt>User Name</dt>
                                        <dd>${value.UserName}</dd>
                                        <dt>User Id:</dt>
                                        <dd>${value.UserId}</dd>
                                        <dt>Email:</dt>
                                        <dd>${value.Email}</dd>
                                        <dt>Contact:</dt>
                                        <dd>${value.Mobile}</dd>
                                    </dl>
                                    <button class="btn btn-link" id="btnLogout" data-bs-dismiss="modal">Logout</button>
                                </div>
                                `).appendTo("#customersProfileDetails")
                            }
                            
                        } else{
                            $("#loginError").html("Invalid UserId or Password").css("color", "red");
                        }
                    })
                }
            })
        }
    }) 
    //=============//

    $(document).on("click", "#btnLogout", function(){
        var flag = confirm("Are you sure to Logout..");
            if(flag==true){
                $.removeCookie("USERID");
                $("#customersProfileDetails").html("");
                $(`<div class="modal-footer">
                    <button class="btn btn-link" id="btnSignin" data-bs-dismiss="modal">Sign in</button>
                </div>`).appendTo("#customersProfileDetails");
                $("#CustomerId").html("");
                LoadPage("customer.html");
                LoadForm("UserLogin.html");
            } else{
            alert("You Canceled Logout..");
            }
    })
    //=============//

    $(document).on("click", "#btnSendMessage", function(){
        var customersDetails = {
            UserName: $("#txtCustomersName").val(),
            UserEmail: $("#txtCustomersEmail").val(),
            UserPhone: $("#txtCustomersPhone").val(),
            Issue : $("#txtComment").val()
        }
        if($("#txtCustomersName").val()==""){
            $("#userError").html("Please Enter Username");
            $("#txtCustomersName").focus();
        } else if($("#txtCustomersEmail").val()==""){
            $("#userError").html("Please Enter Email");
            $("#txtCustomersEmail").focus();
        } else if($("#txtCustomersPhone").val()==""){
            $("#userError").html("Please Enter Mobile Number");
            $("#txtCustomersPhone").focus();
        } else if($("#txtComment").val()==""){
            $("#userError").html("Please Enter Message");
            $("#txtComment").focus();
        }
         else{
            alert("Response Submited..")
            $.ajax({
            method:"post",
            url:"http://localhost:8989/customersContactDetails",
            data:customersDetails
            }); 
            LoadPage("contact.html");
            $("#shopperHeading").css("display", "none")
        }
    })
    //===========//

    $(document).on("click", "#btnShipping", function(){
    LoadPage("shipping.html");
    $("#shopperHeading").css("display", "none")
    })
    //============//

    $(document).on("click", "#btnFAQ", function(){
    LoadPage("FAQ.html");
    $("#shopperHeading").css("display", "none")
    })
    //===========//

    $(document).on("click", "#btnContact", function(){
    LoadPage("contact.html");
    $("#shopperHeading").css("display", "none")
    })
    //============//

    $("#btnAdmin").click(function(){
        LoadPage("Admin.html");
    })
    //============//

    $(document).on("click", "#btnall", function(){
        $("#productContainer").html("");
        LoadProducts("http://localhost:8989/products")
    })
    //==============//

    $(document).on("click", "#btnelectronics", function(e){
        $("#productContainer").html("");
        LoadProducts(`http://localhost:8989/${e.target.name}`);
    })
    //==============//

    $(document).on("click", "#btnjewelery", function(e){
        $("#productContainer").html("");
        LoadProducts(`http://localhost:8989/${e.target.name}`);
    })
    //===============//

    $(document).on("click", "#btnmensfashion", function(e){
        $("#productContainer").html("");
        LoadProducts(`http://localhost:8989/${e.target.name}`);
    })
    //================//

    $(document).on("click", "#btnwomensfashion", function(e){
        $("#productContainer").html("");
        LoadProducts(`http://localhost:8989/${e.target.name}`);
    })
    //================// 

    $(document).on("click", "#btnContinueShopping", function(){
        LoadPage("home.html");
        LoadProducts("http://localhost:8989/products")
    })
    //=============//

    $(document).on("click", "#btnAdminCustomer", function(){
        LoadPage("Admin.html");
    })
    //================//

    $(document).on("click", "#btnVendorsRegistration", function(){
        var vendorsDetails= {
            VendorName:$("#txtVendorsName").val(),
            VendorId:$("#txtVendorsId").val(),
            VendorEmail:$("#txtVendorsEmail").val(),
            VendorPass:$("#txtVendorsPassword").val(),
        }
        if($("#txtVendorsName").val()==""){
            $("#vendorError").html("Please Enter Name").css("color", "red");
            $("#txtVendorsName").focus()
        } else if($("#txtVendorsId").val()==""){
            $("#vendorError").html("Please Enter ID").css("color", "red");
            $("#txtVendorsId").focus()
        } else if($("#txtVendorsEmail").val()==""){
            $("#vendorError").html("Please Enter Email").css("color", "red");
            $("#txtVendorsEmail").focus()
        } else if($("#txtVendorsPassword").val()==""){
            $("#vendorError").html("Please Enter Password").css("color", "red");
            $("#txtVendorsPassword").focus();
        } else{
            alert("Welcome, You have successfully registered..")
            LoadPage("Admin.html");
            $.ajax({
                method:"post",
                url:"http://localhost:8989/vendorsRegistration",
                data:vendorsDetails
            });
        }
    })
    //=============//

    $(document).on("click", "#btnAddToCart", function(e){
        alert(`${e.target.value} \nAdded To Cart`);
        selectedCart.push(`${e.target.id}`);
        getCartCount();
        $("#emptyCart").html("");
        $("#cartTable").css("display", "block")
        cartItem(`http://localhost:8989/product/${e.target.name}`)
    })
    //=============//

    var selectedCart = [];
    function getCartCount(){
        $("#lblCount").html(`${selectedCart.length}`);
    }

    function cartItem(URL){
        $.ajax({
            method:"get",
            url:URL,
            success:function(data){
                $.each(data, (property, value)=>{
                    $(`
                    <tr>
                        <td>
                        <img width="100" height="100" src=${value.image}>
                        </td>
                        <td>${value.title}</td>
                        <td>₹ ${Math.round(value.price*82.34)}</td>
                    </tr>`).appendTo("#cartItems")
                })
            }
        })
    }
})

