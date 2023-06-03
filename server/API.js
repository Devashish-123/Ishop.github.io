var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors  = require("cors");

var constr = "mongodb://127.0.0.1:27017";

var app = express();

app.use(cors());

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("<h1>Welcome To My APIs</h1>")
});

app.get("/products", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
});

app.get("/electronics", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({category:"electronics"}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
});

app.get("/jewelery", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({category:"jewelery"}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
});

app.get("/mensfashion", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({category:"mens"}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
});

app.get("/womensfashion", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({category:"womens"}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})
///////////////===================/////////////////

app.get("/product/1", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:1}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/2", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:2}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/3", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:3}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/4", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:4}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/5", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:5}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})
app.get("/product/6", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:6}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/7", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:7}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/8", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:8}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/9", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:9}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/10", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:10}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/11", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:11}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/12", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:12}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/13", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:13}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/14", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:14}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/15", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:15}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/16", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:16}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/17", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:17}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/18", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:18}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/19", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:19}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})

app.get("/product/20", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("products").find({id:20}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
})
///////////////////==============================////////////////////



app.get("/customers", (req, res)=>{
    mongoClient.connect(constr, (err, ClientObj)=>{
        if(!err){
            var database = ClientObj.db("ishop")
            database.collection("customers").find({}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }
            })
        }
    })
});

app.get("/contacts", (req, res)=>{
    mongoClient.connect(constr)
    .then(ClientObj=>{
        var database = ClientObj.db("ishop")
        database.collection("contacts").find({}).toArray()
        .then(document=>{
            res.send(document);
            res.end();
        })
        .then(err=>{
            res.send(err);
        })
    })
});

app.get("/vendors", (req, res)=>{
    mongoClient.connect(constr)
    .then(ClientObj=>{
        var database = ClientObj.db("ishop")
        database.collection("vendors").find({}).toArray()
        .then(document=>{
            res.send(document);
            res.end();
        })
        .then(err=>{
            res.send(err);
        })
    })
});

app.post("/customersRegistration", (req, res)=>{
    var customer = {
        UserId: req.body.UserId,
        UserName: req.body.UserName, 
        Password: req.body.Password,
        Email: req.body.Email, 
        Age: parseInt(req.body.Age), 
        Mobile: req.body.Mobile
    };
    mongoClient.connect(constr,(err, clientObject)=>{
        if(!err) {
            var database = clientObject.db("ishop");
            database.collection("customers").insertOne(customer, (err, result)=>{
                if(!err){
                    console.log("Record Inserted");
                    res.redirect("/customers");
                }
            })
        }
    })
});

app.post("/customersContactDetails", (req, res)=> {
    var customersDetails = {
        UserName: req.body.UserName,
        UserEmail: req.body.UserEmail,
        UserPhone: req.body.UserPhone,
        Issue: req.body.Issue
    }
    mongoClient.connect(constr,(err, clientObject)=>{
        if(!err) {
            var database = clientObject.db("ishop");
            database.collection("contacts").insertOne(customersDetails, (err, result)=>{
                if(!err){
                    console.log("Record Inserted");
                    res.redirect("/customers");
                }
            })
        }
    })
});

app.post("/vendorsRegistration", (req, res)=> {
    var vendorsDetails = {
        vendorName: req.body.VendorName,
        vendorId:req.body.VendorId,
        userEmail: req.body.VendorEmail,
        vendorPass: req.body.VendorPass
    }
    mongoClient.connect(constr,(err, clientObject)=>{
        if(!err) {
            var database = clientObject.db("ishop");
            database.collection("vendors").insertOne(vendorsDetails, (err, result)=>{
                if(!err){
                    console.log("Record Inserted");
                    res.redirect("/vendors");
                }
            })
        }
    })
});
app.listen(8989);
console.log(`Server Started : http://localhost:8989`);
