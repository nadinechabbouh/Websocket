var ws= new WebSocket("ws://localhost:8082");

            /*****************Connection**************************/    
           
            function connectToServer() {
                ws = new WebSocket(document.getElementById("inputurl").value);
                ws.addEventListener("open",(event)=>{
                    console.log("we are connected!")}
                    );
                document.getElementById("connectionStatus").innerHTML = "Connected";
            }


            /***************Disconnection********************/
            function disconnectToServer() {
                ws = new WebSocket(document.getElementById("inputurl").value);
                document.getElementById("connectionStatus").innerHTML = "Disconnected";
                ws.close();
            }

            




            function dropdown() {
                document.getElementById("myDropdown").classList.toggle("show");
                window.onclick =function(e) {
                if (!e.target.matches(".dropbtn")){
                var myDropdown = document.getElementById("myDropdown");
                
                        if (myDropdown.classList.contains("show")) {
                             myDropdown.classList.remove("show");
                    }
                }
            }
            }
            function dropdown2() {
                document.getElementById("myDropdown2").classList.toggle("show");
                window.onclick =function(e) {
                if (!e.target.matches(".dropbtn2")) {
                var myDropdown = document.getElementById("myDropdown2");

                    if (myDropdown.classList.contains("show")) {
                        myDropdown.classList.remove("show");
                    }
                }
            }
            
            } 
            function dropdown1() {
                document.getElementById("myDropdown1").classList.toggle("show");
                window.onclick =function(e) {
                if (!e.target.matches(".dropbtn1")){
                var myDropdown = document.getElementById("myDropdown1");
                
                        if (myDropdown.classList.contains("show")) {
                             myDropdown.classList.remove("show");
                    }
                }
            }
            }
            
           
            /************************************************/
          
           function Savechangetrs(){
                   var r=(document.getElementById("request")).value
                   var h=(document.getElementById("header")).value
                    var e=(document.getElementById("endpoint")).value
                    var fi=(document.getElementById("flow_id")).value
                    var rs=(document.getElementById("resource")).value
                    var ci=(document.getElementById("clerk_id")).value
                    var invo=(document.getElementById("invoice")).value
                    var ref=(document.getElementById("ref_num")).value
                    var tx=(document.getElementById("txn_type")).value
                    var am=(document.getElementById("amount")).value
                    var tram=(document.getElementById("transaction_amount")).value
                    var val=(document.getElementById("value")).value
                    var dec=(document.getElementById("decimal_shift")).value
                    var cur=(document.getElementById("currency")).value
                    var t=(document.getElementById("tip")).value
                    var valt=(document.getElementById("valuetip")).value
                    var dect=(document.getElementById("decimal_shifttip")).value
                    var curt=(document.getElementById("currencytip")).value
                    var x=(document.getElementById("enable_suspend_events")).value
                    var pr=(document.getElementById("print_receipt")).value
                    var host=(document.getElementById("host_approval_code")).value
                    var tok=(document.getElementById("token")).value
                    var valtok=(document.getElementById("valuetoken")).value
                    var datetok=(document.getElementById("exp_date")).value
                    var pay_type=(document.getElementById("payment_type")).value
                    var prefo_rec=(document.getElementById("preformatted_receipt")).value

                  
           }
           /************************************************/
           function Savechangedev(){
                   var r=(document.getElementById("requestdev")).value
                   var h=(document.getElementById("headerdev")).value
                    var e=(document.getElementById("endpointdev")).value
                    var fi=(document.getElementById("flow_iddev")).value
                    var rs=(document.getElementById("resourcedev")).value
                    var pr=(document.getElementById("print_receiptdev")).value
                    var ty=(document.getElementById("typedev")).value
                    var x=(document.getElementById("enable_suspend_eventsdev")).value 
                    
            mess={
                "request":{
                "header":{
                "endpoint":"/NAR/v1/device",
                "flow_id":"277555"
                },
                "resource":{
                "type":"reset/terminal_info",
                "enable_suspend_events":true,
                "print_receipt":true
                }
                }
                }
                
                document.getElementById("changereqFS").innerHTML=JSON.stringify(mess)
                              
           }
                
                 
           /************************************************/ 
            function ValiderS(){
                
                /*const radiobts= document.querySelectorAll(`input[name="drone"]`);
                for (const radiobt of radiobts){ if(radiobt.checked){
                    inp=radiobt.value;
                } */
                     
                Savechangetrs()        
                var value = document.getElementById("inputvalueS");
                var valtip=document.getElementById("inputvalueST")
                var curtip = document.getElementById("inputcurST");
                var dectip = document.getElementById("inputdecT");
                var type=document.getElementById("sale");
                var inv=document.getElementById("inputinvoice")
                var id = document.getElementById("inputId");          
                var curr = document.getElementById("inputcurS");
                var decsh = document.getElementById("inputdec");
                var prr = document.getElementById("inputPRS");
                var sus = document.getElementById("inputESES");
               
                var tram={
                    val:value.value, 
                    dec:decsh.value,
                    cur:curr.value
                    }
                    tram[(document.getElementById("value")).value]=tram["val"]
                    delete tram["val"]
                    tram[(document.getElementById("decimal_shift")).value]=tram["dec"] 
                    delete tram["dec"] 
                    tram[(document.getElementById("currency")).value]=tram["cur"]
                    delete tram["cur"]    
                if ((valtip.value=="0000")&&(dectip.value=="2")){
                        delete t
                         
                     
                 
                    }
                else{    
                var t={
                    valt: valtip.value ,
                    dect :dectip.value ,
                    curt : curtip.value
                }

                t[(document.getElementById("valuetip")).value]=t["valt"]
                delete t["valt"]
                t[(document.getElementById("decimal_shifttip")).value]=t["dect"]
                delete t["dect"]
                t[(document.getElementById("currencytip")).value]=t["curt"]
                delete t["curt"]}
    
                
    
                var am={
                    tram,
                    t
                }
                am[(document.getElementById("transaction_amount")).value]=am["tram"]
                delete am["tram"]
                am[(document.getElementById("tip")).value]=am["t"]
                delete am["t"]
    
    
                var rs={
                    invo:inv.value,
                    ci:id.value,
                    tx:type.value,
                    am,
                    pr:Boolean (prr.value),
                    x:Boolean(sus.value)
                }
                rs[(document.getElementById("invoice")).value]=rs["invo"]
            delete rs["invo"]
            rs[(document.getElementById("clerk_id")).value]=rs["ci"]
            delete rs["ci"]
            rs[(document.getElementById("txn_type")).value]=rs["tx"]
            delete rs["tx"]
            rs[(document.getElementById("amount")).value]=rs["am"]
            delete rs["am"]
            rs[(document.getElementById("enable_suspend_events")).value]=rs["x"]
            delete rs["x"]
            rs[(document.getElementById("print_receipt")).value]=rs["pr"]
            delete rs["pr"]
               
                var h={
                    e:`/NAR/v1/transaction`,
                    fi:"577125"
                }
                 
                h[(document.getElementById("endpoint")).value]=h["e"]
                delete h["e"]
                h[(document.getElementById("flow_id")).value]=h["fi"] 
                delete h["fi"]
                
               var r={
                    h,
                    rs 
                }
                r[(document.getElementById("header")).value]=r["h"]
                delete r["h"]
                r[(document.getElementById("resource")).value]=r["rs"]
                delete r["rs"] 
               
               var mess={
                    r
                }
               
                mess[(document.getElementById("request")).value]=mess["r"]
                delete mess["r"]
               
                
               
                   
               
                
               
                var b= JSON.stringify(mess)
                   
                console.log(b)    
                ws.send(b);
                
                inv.value='';
                value.value = '';
                curr.value = '';
                decsh.value='';
                id.value='';
                
                
                ws.addEventListener("message", function (event) {
                console.log('Message received from server',event.data);
                rep=event.data;
                document.getElementById("responseFromServer").innerHTML = rep;})
                
                var historytable = {
                    url: document.getElementById("inputurl").value,
                    message: b,
                    date: new Date()
                };
                messagesHistory.unshift(historytable);
                createHistorytable(historytable);
                storeHistory();
                
   
            }
           

            function ValiderFS(){
                Savechangetrs()
                var id = document.getElementById("inputIdFS");  
                var value = document.getElementById("inputvalueFS");
                var curr = document.getElementById("inputcurFS");
                var decsh = document.getElementById("inputdecFS");
                var valtip=document.getElementById("inputvalueFST");
                var dectip=document.getElementById("inputdecFT");
                var curtip=document.getElementById("inputcurFST");
                var inv=document.getElementById("inputinvoiceFS")
                var type=document.getElementById("force_sale");
                var prr= document.getElementById("inputPRFS");
                var sus = document.getElementById("inputESEFS");
            var tram={
                val:value.value,
                dec:decsh.value,
                cur:curr.value
                }

            tram[(document.getElementById("value")).value]=tram["val"]
            delete tram["val"]
            tram[(document.getElementById("decimal_shift")).value]=tram["dec"] 
            delete tram["dec"] 
            tram[(document.getElementById("currency")).value]=tram["cur"]
            delete tram["cur"] 
               
            if ((valtip.value=="0000")&&(dectip.value=="2")){
                    delete t
                     
                 
             
                }
            else{   
            var t={
                valt: valtip.value ,
                dect :dectip.value ,
                curt : curtip.value
            }

            t[(document.getElementById("valuetip")).value]=t["valt"]
            delete t["valt"]
            t[(document.getElementById("decimal_shifttip")).value]=t["dect"]
            delete t["dect"]
            t[(document.getElementById("currencytip")).value]=t["curt"]
            delete t["curt"]}

            var am={
                tram,
                t
            }
            am[(document.getElementById("transaction_amount")).value]=am["tram"]
            delete am["tram"]
            am[(document.getElementById("tip")).value]=am["t"]
            delete am["t"]

            var rs={
                invo:inv.value,
                ci:id.value,
                tx:type.value,
                am,
                x:Boolean (sus.value),
                pr:Boolean( prr.value),
                "host_approval_code":"12345A"
            }
            rs[(document.getElementById("invoice")).value]=rs["invo"]
            delete rs["invo"]
            rs[(document.getElementById("clerk_id")).value]=rs["ci"]
            delete rs["ci"]
            rs[(document.getElementById("txn_type")).value]=rs["tx"]
            delete rs["tx"]
            rs[(document.getElementById("amount")).value]=rs["am"]
            delete rs["am"]
            rs[(document.getElementById("print_receipt")).value]=rs["x"]
            delete rs["x"]
            rs[(document.getElementById("enable_suspend_events")).value]=rs["pr"]
            delete rs["pr"]
           
            var h={
                e:`/NAR/v1/transaction`,
                fi:"577125"
            }
             
            h[(document.getElementById("endpoint")).value]=h["e"]
            delete h["e"]
            h[(document.getElementById("flow_id")).value]=h["fi"] 
            delete h["fi"]
            
           var r={
                h,
                rs 
            }
            
            r[(document.getElementById("header")).value]=r["h"]
            delete r["h"]
            r[(document.getElementById("resource")).value]=r["rs"]
            delete r["rs"] 
          
           var mess={
                r
            }
            mess[(document.getElementById("request")).value]=mess["r"]
            delete mess["r"] 
            
           
               
           
           
               var b=JSON.stringify(mess)
               console.log(b)
                ws.send(b);
                inv.value=''
                id.value=''
                value.value = '';
                curr.value = '';
                decsh.value='';
                ws.addEventListener("message", function (event) {
                console.log('Message received from server',event.data);
                rep=event.data;
                document.getElementById("responseFromServer").innerHTML = rep;
                })
                var historytable = {
                    url: document.getElementById("inputurl").value,
                    message: b,
                    date: new Date()
                };
                messagesHistory.unshift(historytable);
                createHistorytable(historytable);
                storeHistory();
            
                }

            function ValiderR(){
                Savechangetrs()

                var id = document.getElementById("inputIdR");  
                var value = document.getElementById("inputvalueR");
                var curr = document.getElementById("inputcurR");
                var decsh =document.getElementById("inputdecR")
                var inv=document.getElementById("inputinvoiceR")
                var prr=document.getElementById("inputPRR")
                var sus=document.getElementById("ESESet")
                var type=document.getElementById("refund");




               

                var tram={
                val:value.value,
                dec:decsh.value,
                cur:curr.value
                }

            tram[(document.getElementById("value")).value]=tram["val"]
            delete tram["val"]
            tram[(document.getElementById("decimal_shift")).value]=tram["dec"] 
            delete tram["dec"] 
            tram[(document.getElementById("currency")).value]=tram["cur"]
            delete tram["cur"] 
            
            

            var am={
                tram
                
            }
            am[(document.getElementById("transaction_amount")).value]=am["tram"]
            delete am["tram"]
            

            var rs={
                invo:inv.value ,
                ci:id.value ,
                tx:type.value,
                am,
                x:Boolean(sus.value),
                pr:Boolean(prr.value)
            }

            rs[(document.getElementById("invoice")).value]=rs["invo"]
            delete rs["invo"]
            rs[(document.getElementById("clerk_id")).value]=rs["ci"]
            delete rs["ci"]
            rs[(document.getElementById("txn_type")).value]=rs["tx"]
            delete rs["tx"]
            rs[(document.getElementById("amount")).value]=rs["am"]
            delete rs["am"]
            rs[(document.getElementById("enable_suspend_events")).value]=rs["x"]
            delete rs["x"]
            rs[(document.getElementById("print_receipt")).value]=rs["pr"]
            delete rs["pr"]
           
            var h={
                e:`/NAR/v1/transaction`,
                fi:"577125"
            }
             
            h[(document.getElementById("endpoint")).value]=h["e"]
            delete h["e"]
            h[(document.getElementById("flow_id")).value]=h["fi"] 
            delete h["fi"]
            
           var r={
                h,
                rs 
            }
            
            r[(document.getElementById("header")).value]=r["h"]
            delete r["h"]
            r[(document.getElementById("resource")).value]=r["rs"]
            delete r["rs"] 
          
           var mess={
                r
            }
            mess[(document.getElementById("request")).value]=mess["r"]
            delete mess["r"] 
            
           
                
                var b=JSON.stringify(mess)
                console.log(b)
                ws.send(b);

                inv.value=''
                id.value=''
                value.value = '';
                curr.value = '';
                ws.addEventListener("message", function (event) {
                console.log('Message received from server',event.data);
                rep=event.data;
                document.getElementById("responseFromServer").innerHTML = rep;})
                var historytable = {
                    url: document.getElementById("inputurl").value,
                    message: b,
                    date: new Date()
                };
                messagesHistory.unshift(historytable);
                createHistorytable(historytable);
                storeHistory();
                
            
            };

            function ValiderV(){
                Savechangetrs()
                    var refv = document.getElementById("inputrefV");
                    var sus=(document.getElementById("inputESEV"))
                    var prr=(document.getElementById("inputPRV")) 
                    var inv=document.getElementById("inputinvoiceV")
                    var type=document.getElementById("void");
                    
            

            var rs={
                ref:refv.value,
                tx:type.value,
                invo:inv.value,
                x:Boolean(sus.value),
                pr: Boolean(prr.value)
            }
            rs[(document.getElementById("invoice")).value]=rs["invo"]
            delete rs["invo"]
            rs[(document.getElementById("ref_num")).value]=rs["ref"]
            delete rs["ref"]
            rs[(document.getElementById("txn_type")).value]=rs["tx"]
            delete rs["tx"]
            rs[(document.getElementById("print_receipt")).value]=rs["pr"]
            delete rs["pr"]
           
            rs[(document.getElementById("enable_suspend_events")).value]=rs["x"]
            delete rs["x"]
           
            var h={
                e:`/NAR/v1/transaction`,
                fi:"577125"
            }
             
            h[(document.getElementById("endpoint")).value]=h["e"]
            delete h["e"]
            h[(document.getElementById("flow_id")).value]=h["fi"] 
            delete h["fi"]
            
           var r={
                h,
                rs 
            }
            
            r[(document.getElementById("header")).value]=r["h"]
            delete r["h"]
            r[(document.getElementById("resource")).value]=r["rs"]
            delete r["rs"] 
          
           var mess={
                r
            }
            mess[(document.getElementById("request")).value]=mess["r"]
            delete mess["r"] 
            
            
        
                var b=JSON.stringify(mess);
                console.log(b)
                ws.send(b);
                
                refv.value = '';
                inv.value='';
                
                ws.addEventListener("message", function (event) {
                console.log('Message received from server',event.data);
                rep=event.data;
                document.getElementById("responseFromServer").innerHTML = rep});
                var historytable = {
                    url: document.getElementById("inputurl").value,
                    message: b,
                    date: new Date()
                };
                messagesHistory.unshift(historytable);
                createHistorytable(historytable);
                storeHistory();
                
            }
            



            


            function ValiderA(){
                Savechangetrs()

                var id = document.getElementById("inputIdA");
                var value = document.getElementById("inputvalueA");
                var curr = document.getElementById("inputcurA");
                var refa = document.getElementById("inputrefA");
                var decsh = document.getElementById("inputdecA")
                var inv=document.getElementById("inputinvoiceA")
                var prr=document.getElementById("inputPRA")
                var sus=document.getElementById("inputESEA")
                var type=document.getElementById("preauth")
              

                var tram={
                val:value.value,
                dec:decsh.value,
                cur:curr.value
                }

            tram[(document.getElementById("value")).value]=tram["val"]
            delete tram["val"]
            tram[(document.getElementById("decimal_shift")).value]=tram["dec"] 
            delete tram["dec"] 
            tram[(document.getElementById("currency")).value]=tram["cur"]
            delete tram["cur"] 
            
            

            var am={
                tram
                
            }
            am[(document.getElementById("transaction_amount")).value]=am["tram"]
            delete am["tram"]
            

            var rs={
                invo:inv.value,
                ci:id.value,
                tx:type.value,
                am,
                ref:refa.value,
                x:Boolean(sus.value),
                pr:Boolean(prr.value)
            }
            rs[(document.getElementById("invoice")).value]=rs["invo"]
            delete rs["invo"]
            rs[(document.getElementById("clerk_id")).value]=rs["ci"]
            delete rs["ci"]
            rs[(document.getElementById("txn_type")).value]=rs["tx"]
            delete rs["tx"]
            rs[(document.getElementById("amount")).value]=rs["am"]
            delete rs["am"]
            rs[(document.getElementById("ref_num")).value]=rs["ref"]
            delete rs["ref"]
            rs[(document.getElementById("enable_suspend_events")).value]=rs["x"]
            delete rs["x"]
            rs[(document.getElementById("print_receipt")).value]=rs["pr"]
            delete rs["pr"]
           
            var h={
                e:`/NAR/v1/transaction`,
                fi:"577125"
            }
             
            h[(document.getElementById("endpoint")).value]=h["e"]
            delete h["e"]
            h[(document.getElementById("flow_id")).value]=h["fi"] 
            delete h["fi"]
            
           var r={
                h,
                rs 
            }
            
            r[(document.getElementById("header")).value]=r["h"]
            delete r["h"]
            r[(document.getElementById("resource")).value]=r["rs"]
            delete r["rs"] 
          
           var mess={
                r
            }
            mess[(document.getElementById("request")).value]=mess["r"]
            delete mess["r"] 
            
            
               
           
               



                var b=JSON.stringify(mess);
                console.log(b)
                ws.send(b);
                inv.value=''
                value.value = '';
                curr.value = '';
                refa.value='';
                dec.value='';
                id.value=''    
                ws.addEventListener("message", function (event) {
                console.log('Message received from server',event.data);
                rep=event.data;
                document.getElementById("responseFromServer").innerHTML = rep;})
                
                var historytable = {
                    url: document.getElementById("inputurl").value,
                    message: b,
                    date: new Date()
                };
                messagesHistory.unshift(historytable);
                createHistorytable(historytable);
                storeHistory();
            
            };
            function ValiderAC(){
                
                Savechangetrs()
                var value = document.getElementById("inputvalueAC");
                var curr = document.getElementById("inputcurAC");
                var refa = document.getElementById("inputrefAC");
                var decsh = document.getElementById("inputdecAC")
                var inv=document.getElementById("inputinvoiceAC")
                var type = document.getElementById("preauth_completion")
                var sus= document.getElementById("inputESEAC")
                var prr=document.getElementById("inputPRAC")

                var tram={
                    val:value.value,
                    dec:decsh.value,
                    cur:curr.value
                    }
    
                tram[(document.getElementById("value")).value]=tram["val"]
                delete tram["val"]
                tram[(document.getElementById("decimal_shift")).value]=tram["dec"] 
                delete tram["dec"] 
                tram[(document.getElementById("currency")).value]=tram["cur"]
                delete tram["cur"] 
                
                
    
                var am={
                    tram
                    
                }
                am[(document.getElementById("transaction_amount")).value]=am["tram"]
                delete am["tram"]
                
    
                var rs={
                    invo:inv.value,
                    tx:type.value,
                    am,
                    ref:refa.value,
                    x:Boolean(sus.value),
                    pr:Boolean(prr.value)
                }
    
                rs[(document.getElementById("invoice")).value]=rs["invo"]
                delete rs["invo"]
                rs[(document.getElementById("txn_type")).value]=rs["tx"]
                delete rs["tx"]
                rs[(document.getElementById("amount")).value]=rs["am"]
                delete rs["am"]
                rs[(document.getElementById("ref_num")).value]=rs["ref"]
                delete rs["ref"]
                rs[(document.getElementById("enable_suspend_events")).value]=rs["x"]
                delete rs["x"]
                rs[(document.getElementById("print_receipt")).value]=rs["pr"]
                delete rs["pr"]
               
                var h={
                    e:`/NAR/v1/transaction`,
                    fi:"577125"
                }
                 
                h[(document.getElementById("endpoint")).value]=h["e"]
                delete h["e"]
                h[(document.getElementById("flow_id")).value]=h["fi"] 
                delete h["fi"]
                
               var r={
                    h,
                    rs 
                }
                
                r[(document.getElementById("header")).value]=r["h"]
                delete r["h"]
                r[(document.getElementById("resource")).value]=r["rs"]
                delete r["rs"] 
              
               var mess={
                    r
                }
                mess[(document.getElementById("request")).value]=mess["r"]
                delete mess["r"]
                
                var b=JSON.stringify(mess);
                console.log(b)
                ws.send(b);
                value.value = '';
                curr.value = '';
                refa.value='';
                decsh.value='';
                inv.value='';
                ws.addEventListener("message", function (event) {
                console.log('Message received from server',event.data);
                rep=event.data;
                document.getElementById("responseFromServer").innerHTML = rep;})
                
                var historytable = {
                    url: document.getElementById("inputurl").value,
                    message: b,
                    date: new Date()
                };
                messagesHistory.unshift(historytable);
                createHistorytable(historytable);
                storeHistory();
            
            };
             


            function ValiderTA(){

                Savechangetrs()
                var prr=document.getElementById("inputPRTA")
                var sus=document.getElementById("inputESETA")
                var type=document.getElementById("tip_adjustment")
                var valtip = document.getElementById("inputvalueTA");
                var curtip = document.getElementById("inputcurTA");
                var refa = document.getElementById("inputrefTA");
                var dectip = document.getElementById("inputdecTA")

                var t={
                    valt: valtip.value ,
                    dect :dectip.value ,
                    curt : curtip.value
                }
    
                t[(document.getElementById("valuetip")).value]=t["valt"]
                delete t["valt"]
                t[(document.getElementById("decimal_shifttip")).value]=t["dect"]
                delete t["dect"]
                t[(document.getElementById("currencytip")).value]=t["curt"]
                delete t["curt"]
    
                var am={
                    
                    t
                }
               
                am[(document.getElementById("tip")).value]=am["t"]
                delete am["t"]
    
    
                var rs={
                    ref:refa.value,
                    tx:type.value,
                    am,
                    pr:Boolean (prr.value),
                    x:Boolean(sus.value)
                }
            rs[(document.getElementById("ref_num")).value]=rs["ref"]
            delete rs["ref"] 
            rs[(document.getElementById("txn_type")).value]=rs["tx"]
            delete rs["tx"]
            rs[(document.getElementById("amount")).value]=rs["am"]
            delete rs["am"]
            rs[(document.getElementById("enable_suspend_events")).value]=rs["x"]
            delete rs["x"]
            rs[(document.getElementById("print_receipt")).value]=rs["pr"]
            delete rs["pr"]
               
                var h={
                    e:`/NAR/v1/transaction`,
                    fi:"577125"
                }
                 
                h[(document.getElementById("endpoint")).value]=h["e"]
                delete h["e"]
                h[(document.getElementById("flow_id")).value]=h["fi"] 
                delete h["fi"]
                
               var r={
                    h,
                    rs 
                }
                r[(document.getElementById("header")).value]=r["h"]
                delete r["h"]
                r[(document.getElementById("resource")).value]=r["rs"]
                delete r["rs"] 
               
               var mess={
                    r
                }
               
                mess[(document.getElementById("request")).value]=mess["r"]
                delete mess["r"]
               
                
               
                   
               
                
               
                var b= JSON.stringify(mess)
                   
                console.log(b)    
                ws.send(b);
               
                valtip.value = '';
                curtip.value = '';
                dectip.value='';
                
                
                
                ws.addEventListener("message", function (event) {
                console.log('Message received from server',event.data);
                rep=event.data;
                document.getElementById("responseFromServer").innerHTML = rep;})
                
                var historytable = {
                    url: document.getElementById("inputurl").value,
                    message: b,
                    date: new Date()
                };
                messagesHistory.unshift(historytable);
                createHistorytable(historytable);
                storeHistory();
                


            }
            function ValiderTrA(){

                Savechangetrs()
                var refa = document.getElementById("inputrefTrA");  
                var value = document.getElementById("inputvalueTrA");
                var curr = document.getElementById("inputcurTrA");
                var decsh = document.getElementById("inputdecTrA");
                var valtip=document.getElementById("inputvalueTrAT");
                var dectip=document.getElementById("inputdecTrAT");
                var curtip=document.getElementById("inputcurTrAT");
                var type=document.getElementById("transaction_adjust");
                var prr= document.getElementById("inputPRTrA");
                var sus = document.getElementById("inputESETrA");

                var tram={
                    val:value.value, 
                    dec:decsh.value,
                    cur:curr.value
                    }
                    tram[(document.getElementById("value")).value]=tram["val"]
                    delete tram["val"]
                    tram[(document.getElementById("decimal_shift")).value]=tram["dec"] 
                    delete tram["dec"] 
                    tram[(document.getElementById("currency")).value]=tram["cur"]
                    delete tram["cur"]    
                if ((valtip.value=="0000")&&(dectip.value=="2")){
                        delete t
                         
                     
                 
                    }
                else{    
                var t={
                    valt: valtip.value ,
                    dect :dectip.value ,
                    curt : curtip.value
                }

                t[(document.getElementById("valuetip")).value]=t["valt"]
                delete t["valt"]
                t[(document.getElementById("decimal_shifttip")).value]=t["dect"]
                delete t["dect"]
                t[(document.getElementById("currencytip")).value]=t["curt"]
                delete t["curt"]}
    
                
    
                var am={
                    tram,
                    t
                }
                am[(document.getElementById("transaction_amount")).value]=am["tram"]
                delete am["tram"]
                am[(document.getElementById("tip")).value]=am["t"]
                delete am["t"]
    
    
                var rs={
                    ref:refa.value,
                    tx:type.value,
                    am,
                    pr:Boolean (prr.value),
                    x:Boolean(sus.value)
                }
                rs[(document.getElementById("ref_num")).value]=rs["ref"]
            delete rs["ref"]
            rs[(document.getElementById("txn_type")).value]=rs["tx"]
            delete rs["tx"]
            rs[(document.getElementById("amount")).value]=rs["am"]
            delete rs["am"]
            rs[(document.getElementById("enable_suspend_events")).value]=rs["x"]
            delete rs["x"]
            rs[(document.getElementById("print_receipt")).value]=rs["pr"]
            delete rs["pr"]
               
                var h={
                    e:`/NAR/v1/transaction`,
                    fi:"577125"
                }
                 
                h[(document.getElementById("endpoint")).value]=h["e"]
                delete h["e"]
                h[(document.getElementById("flow_id")).value]=h["fi"] 
                delete h["fi"]
                
               var r={
                    h,
                    rs 
                }
                r[(document.getElementById("header")).value]=r["h"]
                delete r["h"]
                r[(document.getElementById("resource")).value]=r["rs"]
                delete r["rs"] 
               
               var mess={
                    r
                }
               
                mess[(document.getElementById("request")).value]=mess["r"]
                delete mess["r"]
               
                
               
                   
               
                
               
                var b= JSON.stringify(mess)
                   
                console.log(b)    
                ws.send(b);
                
                refa.value='';
                value.value = '';
                curr.value = '';
                decsh.value='';
               
                
                ws.addEventListener("message", function (event) {
                console.log('Message received from server',event.data);
                rep=event.data;
                document.getElementById("responseFromServer").innerHTML = rep;})
                
                var historytable = {
                    url: document.getElementById("inputurl").value,
                    message: b,
                    date: new Date()
                };
                messagesHistory.unshift(historytable);
                createHistorytable(historytable);
                storeHistory();
                





            }
            function ValiderSet(){
                Savechangetrs()
                var prr=document.getElementById("inputPRSet")
                var sus=document.getElementById("inputESESet")
                var type=document.getElementById("settlement")

                var rs={
    
                    tx:type.value,
                    x:Boolean(sus.value),
                    pr:Boolean(prr.value)
                }
    
               
                rs[(document.getElementById("txn_type")).value]=rs["tx"]
                delete rs["tx"]
                rs[(document.getElementById("enable_suspend_events")).value]=rs["x"]
                delete rs["x"]
                rs[(document.getElementById("print_receipt")).value]=rs["pr"]
                delete rs["pr"]
               
                var h={
                    e:`/NAR/v1/transaction`,
                    fi:"577125"
                }
                 
                h[(document.getElementById("endpoint")).value]=h["e"]
                delete h["e"]
                h[(document.getElementById("flow_id")).value]=h["fi"] 
                delete h["fi"]
                
               var r={
                    h,
                    rs 
                }
                
                r[(document.getElementById("header")).value]=r["h"]
                delete r["h"]
                r[(document.getElementById("resource")).value]=r["rs"]
                delete r["rs"] 
              
               var mess={
                    r
                }
                mess[(document.getElementById("request")).value]=mess["r"]
                delete mess["r"]
                
                var b=JSON.stringify(mess);
                console.log(b)
                ws.send(b);
               
                ws.addEventListener("message", function (event) {
                console.log('Message received from server',event.data);
                rep=event.data;
                document.getElementById("responseFromServer").innerHTML = rep;})
                
                var historytable = {
                    url: document.getElementById("inputurl").value,
                    message: b,
                    date: new Date()
                };
                messagesHistory.unshift(historytable);
                createHistorytable(historytable);
                storeHistory();


            }


            function ValiderBI(){
                
                Savechangetrs()
                var prr=document.getElementById("inputPRBI")
                var tokval=document.getElementById("inputtokenvalBI")
                var tokdate=document.getElementById("inputtokendateBI")
                var type=document.getElementById("balance_inquiry")
                var pay=document.getElementById("inputypeBI")
                var pref=document.getElementById("inputPRBI1")

                
                var tok={
                    valtok:tokval.value,
                    datetok:tokdate.value
                    
                }
                tok[(document.getElementById("valuetoken")).value]=tok["valtok"]
                delete tok["valtok"]
                tok[(document.getElementById("exp_date")).value]=tok["datetok"]
                delete tok["datetok"]
                var rs={
                    pay_type:pay.value,
                    tx:type.value,
                    prefo_rec:Boolean(pref.value),
                    tok,
                    pr: Boolean(prr.value)
                }
                rs[(document.getElementById("payment_type")).value]=rs["pay_type"]
                delete rs["pay_type"]
                rs[(document.getElementById("preformatted_receipt")).value]=rs["prefo_rec"]
                delete rs["prefo_rec"]
                rs[(document.getElementById("txn_type")).value]=rs["tx"]
                delete rs["tx"]
                rs[(document.getElementById("print_receipt")).value]=rs["pr"]
                delete rs["pr"]
                rs[(document.getElementById("token")).value]=rs["tok"]
                delete rs["tok"]
               
               
                var h={
                    e:`/NAR/v1/transaction`,
                    fi:"577125"
                }
                 
                h[(document.getElementById("endpoint")).value]=h["e"]
                delete h["e"]
                h[(document.getElementById("flow_id")).value]=h["fi"] 
                delete h["fi"]
                
               var r={
                    h,
                    rs 
                }
                
                r[(document.getElementById("header")).value]=r["h"]
                delete r["h"]
                r[(document.getElementById("resource")).value]=r["rs"]
                delete r["rs"] 
              
               var mess={
                    r
                }
                mess[(document.getElementById("request")).value]=mess["r"]
                delete mess["r"] 
                
                
            
                    var b=JSON.stringify(mess);
                    console.log(b)
                    ws.send(b);
                    
                    tokval.value = '';
                    tokdate.value='';
                    
                    ws.addEventListener("message", function (event) {
                    console.log('Message received from server',event.data);
                    rep=event.data;
                    document.getElementById("responseFromServer").innerHTML = rep});
                    var historytable = {
                        url: document.getElementById("inputurl").value,
                        message: b,
                        date: new Date()
                    };
                    messagesHistory.unshift(historytable);
                    createHistorytable(historytable);
                    storeHistory();

            }

           function ValiderReset(){
                Savechangedev()
                var type=document.getElementById("reset")

                var rs={
                   
                    ty:type.value,
                    
                }
               
                rs[(document.getElementById("typedev")).value]=rs["ty"]
                delete rs["ty"]
              
               
               
                var h={
                    e:`/NAR/v1/device`,
                    fi:"577125"
                }
                 
                h[(document.getElementById("endpoint")).value]=h["e"]
                delete h["e"]
                h[(document.getElementById("flow_id")).value]=h["fi"] 
                delete h["fi"]
                
               var r={
                    h,
                    rs 
                }
                
                r[(document.getElementById("header")).value]=r["h"]
                delete r["h"]
                r[(document.getElementById("resource")).value]=r["rs"]
                delete r["rs"] 
              
               var mess={
                    r
                }
                mess[(document.getElementById("request")).value]=mess["r"]
                delete mess["r"] 
                
                
            
                    var b=JSON.stringify(mess);
                    console.log(b)
                    ws.send(b);
                    
                  
                    
                    ws.addEventListener("message", function (event) {
                    console.log('Message received from server',event.data);
                    rep=event.data;
                    document.getElementById("responseFromServer").innerHTML = rep});
                    var historytable = {
                        url: document.getElementById("inputurl").value,
                        message: b,
                        date: new Date()
                    };
                    messagesHistory.unshift(historytable);
                    createHistorytable(historytable);
                    storeHistory();


            }

            function Validerterminal(){
                Savechangedev()
                var type=document.getElementById("terminal_info")

                var rs={
                   
                    ty:type.value,
                    
                }
               
                rs[(document.getElementById("typedev")).value]=rs["ty"]
                delete rs["ty"]
              
               
               
                var h={
                    e:`/NAR/v1/device`,
                    fi:"577125"
                }
                 
                h[(document.getElementById("endpoint")).value]=h["e"]
                delete h["e"]
                h[(document.getElementById("flow_id")).value]=h["fi"] 
                delete h["fi"]
                
               var r={
                    h,
                    rs 
                }
                
                r[(document.getElementById("header")).value]=r["h"]
                delete r["h"]
                r[(document.getElementById("resource")).value]=r["rs"]
                delete r["rs"] 
              
               var mess={
                    r
                }
                mess[(document.getElementById("request")).value]=mess["r"]
                delete mess["r"] 
                
                
            
                    var b=JSON.stringify(mess);
                    console.log(b)
                    ws.send(b);
                    
                  
                    
                    ws.addEventListener("message", function (event) {
                    console.log('Message received from server',event.data);
                    rep=event.data;
                    document.getElementById("responseFromServer").innerHTML = rep});
                    var historytable = {
                        url: document.getElementById("inputurl").value,
                        message: b,
                        date: new Date()
                    };
                    messagesHistory.unshift(historytable);
                    createHistorytable(historytable);
                    storeHistory();



            }
            function ValiderRecall(){
                Savechangetrs()
                var type=document.getElementById("recall_last")

                var rs={
                   
                    tx:type.value,
                    
                }
               
                rs[(document.getElementById("txn_type")).value]=rs["tx"]
                delete rs["tx"]
              
               
               
                var h={
                    e:`/NAR/v1/transaction`,
                    fi:"577125"
                }
                 
                h[(document.getElementById("endpoint")).value]=h["e"]
                delete h["e"]
                h[(document.getElementById("flow_id")).value]=h["fi"] 
                delete h["fi"]
                
               var r={
                    h,
                    rs 
                }
                
                r[(document.getElementById("header")).value]=r["h"]
                delete r["h"]
                r[(document.getElementById("resource")).value]=r["rs"]
                delete r["rs"] 
              
               var mess={
                    r
                }
                mess[(document.getElementById("request")).value]=mess["r"]
                delete mess["r"] 
                
                
            
                    var b=JSON.stringify(mess);
                    console.log(b)
                    ws.send(b);
                    
                  
                    
                    ws.addEventListener("message", function (event) {
                    console.log('Message received from server',event.data);
                    rep=event.data;
                    document.getElementById("responseFromServer").innerHTML = rep});
                    var historytable = {
                        url: document.getElementById("inputurl").value,
                        message: b,
                        date: new Date()
                    };
                    messagesHistory.unshift(historytable);
                    createHistorytable(historytable);
                    storeHistory();
            }


            /**************Clear log***************/
           
            function Clearlog(){
                
                logmess = document.getElementById("responseFromServer");
                logmess.innerHTML='';
             }

           /****************Open table*******************/
            function opentab(evt, type) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(type).style.display = "block";
            evt.currentTarget.type += " active";
            
            } 


            
            function opentab2(evt, type) {
            
            document.getElementById(type).style.display = "block";
            evt.currentTarget.type += " active";
            } 
            function opentab3(evt, type) {
            
            document.getElementById(type).style.display = "block";
            evt.currentTarget.type += " active";
            } 

            function opentab4(evt, type) {
            
                document.getElementById(type).style.display = "block";
                evt.currentTarget.type += " active";
                } 
           /****************Open suspended events*******************/
           function opentab1(evt, type) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }alert("Not Yet Implemented ")
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
           
            
            } 
            
         
            /******************history********************/

            var historyContainer;
            var messagesHistory = [];
            function storeHistory() {
                if (messagesHistory && messagesHistory.length >= 100) {
                    messagesHistory = messagesHistory.slice(0, 100)
                }
                localStorage.setItem("hist", JSON.stringify(messagesHistory));
            }

            function getHistory() {
                var his = localStorage.getItem("hist");
                if (his) {
                    try {
                        his = JSON.parse(his);
                        messagesHistory = his;
                    } catch (exc) {
                    }
                }
            }



            function createLogtab(msg) {
                var date = new Date();
                var logdate=document.createElement("td");
                var logurl = document.createElement("td");
                var logreq=document.createElement("td");

               
                logdate.innerHTML = msg.date.toLocaleString()
                logurl.innerHTML= msg.url 
                logreq.innerHTML=msg.message
                
                logdate.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " : " + msg;
                logtab.className = 'table';
                appendLogLine(logtab);
            }



            function createHistorytable(msg) {
                if (!msg.date) {
                    msg.date = new Date();
                }
                else if (typeof msg.date === "string") {
                    msg.date = new Date(msg.date);
                }
                var logtab=document.createElement("table")
                var data="<thead><tr><th><span>Date</span></th>\ <th><span>Url</span></th>\ <th><span>Request</span></th></tr></thead>\ <td> "+msg.date.toLocaleString()+"</td><td> "+msg.url +"</td><td><div class=m> "+msg.message +"</div></td>"
                logtab.innerHTML=data
                logtab.className = 'table';
                appendHistorytable(logtab);
            }

            function appendHistorytable(line) {
                if (!historyContainer) {
                    historyContainer = document.getElementById("historyContainer");
                }
                if (historyContainer.hasChildNodes()) {
                    historyContainer.insertBefore(line, historyContainer.firstChild);
                } else {
                    historyContainer.appendChild(line);
                }
            }


            function LoadHistory() {
                getHistory();
                if (messagesHistory && messagesHistory.length) {
                    for (var i = messagesHistory.length - 1; i >= 0; i--) {
                        createHistorytable(messagesHistory[i]);
                    }
                }
            }
           
      
            function Clearhistory(){
                messagesHistory = [];
                localStorage.clear();
                var d=document.getElementById("historyContainer")
                d.remove()
        
                }

            