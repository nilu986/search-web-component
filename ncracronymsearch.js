(function(){
  const template = document.createElement('template');

    template.innerHTML = `<button type="button" id="widgetButton" class="open-button rightbottom">
        <span style="float: left">Acronym Finder</span><span class="arrowIcon">&#10148; </span> </button>
    <!-- Chat Popup  -->
    <div class="chat-popup rightbottom" style="display: none;" id="myForm">
        <span id="closeChatPopup" class="closeChatPopup">&times;</span>
        <div class="form-container">
            <span>Acronym Finder</span>&nbsp;|&nbsp;<span id="toggleModalButton" class="addAcronym" title="Add Acronym">Add</span>
        </div>
        <div id="search" class="form-container">
            <input type="text" class="myInput" placeholder="Search here..." required>
            <button type="button" id="searchButton" class="btn">GO</button>
        </div>
        <ul class="myUL">
            <li>
                <div class="headerSection">
                    <h4></h4>
                    <h6></h6>
                </div>
                <div class="contentArea">
                    <p></p>
                    <span id="readMoreContent" class="readMoreContent">Read More...</span>
                </div>

            </li>
        </ul>
    </div>

    <!-- Add Acronym Modal -->
    <div id="addAcronymModal" class="modalDialog">
        <div id="form" class="form-wrapper-2">
            <a href="javascript:void(0)" title="Close" class="closeMore" id="closeModal">X</a>
            <div class="modal-header">
                <span>Add Acronym</span>    
            </div>
            <div class="modal-body">
                <input class="myInput" type="text" id="myInput1" maxlength="10" placeholder="Acronym..." required>
                <input class="myInput" type="text" id="myInput2" maxlength="30" placeholder="Fullform..." required>
                <input class="myInput width" type="text" id="myInput3" maxlength="50" placeholder="Short Description..." required>
                <textarea class="detailedDescription" id="myInput4" maxlength="200" placeholder="Detailed Description..." ></textarea>
                <button id="addButton" type="button">Add</button>
            </div>
        </div>   
    </div>
    

    <!-- Read More Modal -->
    <div id="openMoreInfoModal" class="modalDialog">
        <div> <span class="closeMore" id="closemoremodal">X</span>
            <div class="modal-header">
                <!-- <h2></h2> -->
                <span></span>
            </div>  
            <div class="modal-body">
                <p></p>
            </div>
        </div>
    </div>

    <style>
        /* Chat Popup */

        /* Button used to open the chat form - fixed at the bottom of the page */
        .open-button {
            background-color: #555;
            color: white;
            padding: 16px 20px;
            border: none;
            cursor: pointer;
            opacity: 0.8;
            position: fixed;
            width: 280px;
        }
        .arrowIcon{ float: right; transform: rotate(270deg);}
        .open-button.lefttop {
            top: 23px;
            left: 28px;
        }
        .open-button.lefttop .arrowIcon, .open-button.righttop .arrowIcon{
            transform: rotate(90deg);
        }
        .open-button.leftbottom {
            bottom: 23px;
            left: 28px;
        }

        .open-button.righttop {
            top: 23px;
            right: 28px;
        }

        .open-button.rightbottom {
            bottom: 23px;
            right: 28px;
        }

        .chat-popup {
            position: fixed;
            border: 3px solid #f1f1f1;
            z-index: 9;
            padding: 12px;
            background: #fff;
            width:280px;
        }

        .chat-popup.lefttop {
            top: 10px;
            left: 28px;
        }

        .chat-popup.leftbottom {
            bottom: 10px;
            left: 28px;
        }

        .chat-popup.righttop {
            top: 10px;
            right: 28px;
        }

        .chat-popup.rightbottom {
            bottom: 10px;
            right: 28px;
        }

        .form-container span.addAcronym {
            color: #4CAF50;
            font-weight: bold;
            text-decoration: none;
            cursor: pointer;
        }

        .closeChatPopup {
            position: absolute;
            right: -10px;
            top: -15px;
            font-size: 24px;
            background-color: #fff;
            border: 3px solid #f1f1f1;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            text-align: center;
            line-height: 0.8;
            color: #abaaaa;
            font-weight: bold;
            text-decoration: none;
            cursor: pointer;
        }

        /* Add styles to the form container */
        .form-container {
            display: flex;
            align-items: center;
            max-width: 300px;
            padding: 10px;
            background-color: white;
        }
        .form-container span{
            font-family: Arial;
            font-size: 0.9em;
            font-weight: bold;
            color: lightslategray;
            align-items: center;
        }

        .myInput {
            height: 35px;
            padding: 5px;
            margin: 5px;
        }

        .width{
            width: 95%;
        }

        /* When the textarea gets focus, do something */
        .form-container .myInput:focus {
            background-color: #f4efef;
            outline: none;
        }

        /* Set a style for the submit/login button */
        .form-container .btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            width: 100%;
            margin-left: 10px;
            opacity: 0.8;
        }

        /* Add some hover effects to buttons */
        .form-container .btn:hover,
        .open-button:hover {
            opacity: 1;
        }

        textarea{
            width: 28.5em;
            height: 10em;
            resize: none; 
            margin: 5px;
        }

        .myUL {
            font-family: Arial;
            overflow: auto;
            max-height: 250px;
            letter-spacing: 0.5px;
            font-size: 12px;
            list-style-type: none;
            margin: 0;
            padding: 10px;
        }

        .myUL li {
            padding: 5px;
            display: list-item;
            letter-spacing: 1px;
            cursor: pointer;
            display: none
        }

        .myUL li a:hover:not(.header) {
            color: black;
        }

        .headerSection {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            font-size: 2em;
            font-weight: bold;
            color: lightslategray;
            align-items: center;
        }

        .headerSection h4 {
            color: lightslategray;
            margin: 0;
            margin-right: 20px;
        }

        .headerSection h6 {
            margin: 0;
            font-size: 0.6em;
        }

        .contentArea {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            border-top: 1px solid #ddd;
            font-size: 1em;
            color: #999;
            font-weight: 600;
        }

        .contentArea p {
            width: 100%;
            margin-bottom: 10px;
        }

        /*------------------More Info Modal CSS----*/
        .modalDialog {
            position: fixed;
            font-family: Arial, Helvetica, sans-serif;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.8);
            z-index: 99999;
            opacity: 0;
            -webkit-transition: opacity 400ms ease-in;
            -moz-transition: opacity 400ms ease-in;
            transition: opacity 400ms ease-in;
            display: none;
        }

        .modalDialog:target {
            opacity: 1;
            pointer-events: auto;
        }

        .modalDialog >div {
            width: 420px;
            position: relative;
            margin: 10% auto;
            background: #fff;
        }

        #addButton{
            float:right;
            border-radius: 3px;
            background-color: white;
            color: black;
            border: 2px solid #008CBA;
            padding: 10px 20px;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            margin-right: 15px;
        }

        .modal-header{
            background: #55d5ff;
            color: white;
            font-size: 23px;
            font-weight: bolder;
            padding: 5px;
        }
     
        .modal-body{
            height:275px;
            padding: 10px;
        }

        .closeMore {
            background: #606061;
            color: #FFFFFF;
            line-height: 25px;
            position: absolute;
            right: -12px;
            text-align: center;
            top: -10px;
            width: 24px;
            text-decoration: none;
            font-weight: bold;
            -webkit-border-radius: 12px;
            -moz-border-radius: 12px;
            border-radius: 12px;
            -moz-box-shadow: 1px 1px 3px #000;
            -webkit-box-shadow: 1px 1px 3px #000;
            box-shadow: 1px 1px 3px #000;
        }

        .closeMore:hover {
            background: #4CAF50;
        }

        .readMoreContent {
            color: #6fbe72
        }
    </style>`;
    var importDoc = document.currentScript.ownerDocument;
    class AcronymSearchNCR extends HTMLElement {
        constructor() {
            super();
            console.log('New Acronym search object has been instantiated.');
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });
            shadowRoot.appendChild(template.content.cloneNode(true));
            
            this.createSelectors();
            this.bindEventListeners();
        }

        createSelectors() {
            this.searchButton = this.shadowRoot.querySelector('#searchButton');
            this.addButton = this.shadowRoot.querySelector('#addButton');
            this.toggleModalButton = this.shadowRoot.querySelector('#toggleModalButton');
            this.modal = this.shadowRoot.querySelector('#addAcronymModal');
            this.popUp = this.shadowRoot.querySelector('#myForm');
            this.closeModal = this.shadowRoot.querySelector('#closeModal');
            this.closeChatPopup = this.shadowRoot.querySelector('#closeChatPopup');
            this.widgetButton = this.shadowRoot.querySelector('#widgetButton');
            this.inputField = this.shadowRoot.querySelector('.myInput');
            this.readMoreContent = this.shadowRoot.querySelector('#readMoreContent');
            this.readMoreModal = this.shadowRoot.querySelector('#openMoreInfoModal');
            this.closemoremodal = this.shadowRoot.querySelector('#closemoremodal');
        }

        bindEventListeners() {
            this.searchButton.addEventListener('click', this._acronymSearch.bind(this));
            this.addButton.addEventListener('click', this.saveAcronym.bind(this));
            this.toggleModalButton.addEventListener('click', this.toggleModal.bind(this));
            this.closeModal.addEventListener('click', this.toggleModal.bind(this));
            this.widgetButton.addEventListener('click', this.openForm.bind(this));
            this.closeChatPopup.addEventListener('click', this.closeChatWindow.bind(this));
            this.inputField.addEventListener('keypress', this.inputKeyEventListener.bind(this));
            this.readMoreContent.addEventListener('click', this.toggleReadMoreModal.bind(this));
            this.closemoremodal.addEventListener('click', this.toggleReadMoreModal.bind(this));

        }

        connectedCallback() {

        }
        get positionClass() {
            return this.getAttribute('position');
        }

        set positionClass(value) {
            if (value) {
                this.setAttribute('position', value);
            }
        }
        inputKeyEventListener(e) {
            var key = e.which || e.keyCode;
            if (key === 13) {
                this._acronymSearch();
            }
        }

        _acronymSearch() {
            var input, filter, ul, li, a, i, txtValue, readMorebutton, readmore;
            input = this.shadowRoot.querySelector('.myInput');
            filter = input.value.toUpperCase();
            ul = this.shadowRoot.querySelector('.myUL');
            li = ul.getElementsByTagName("li");
            readMorebutton = this.readMoreContent;
            readmore = this.readMoreModal;
            this.getResults(filter, li, readMorebutton, readmore);
        }

        getResults(key, li, readMorebutton, readmore) {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://us-central1-acronym-search-2c665.cloudfunctions.net/mockAPI');
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send([JSON.stringify({
                "id": -1,
                "acronym": key
            })]);

            xhr.onload = function () {
                if (xhr.status != 200) {
                    li[0].style.display = "none";
                } else {
                    if (xhr.response && xhr.response != "[]") {
                        readMorebutton.style.display = "block";
                        let response = JSON.parse(xhr.response);
                        let a = li[0].getElementsByTagName("h4")[0];
                        let h6 = li[0].getElementsByTagName("h6")[0];
                        let p = li[0].getElementsByTagName("p")[0];
                        let readP = readmore.getElementsByTagName("p");
                        let readSpan = readmore.getElementsByTagName("span");
                        a.innerHTML = response[0].acronym;
                        h6.innerHTML = response[0].fullForm;
                        p.innerHTML = response[0].briefDescription;
                        li[0].style.display = "inherit";
                        readSpan[1].innerHTML = response[0].fullForm;
                        readP[0].innerHTML = response[0].detailedDescription;
                    } else {
                        readMorebutton.style.display = "none";
                        li[0].style.display = "inherit";
                        let a = li[0].getElementsByTagName("h4")[0];
                        let h6 = li[0].getElementsByTagName("h6")[0];
                        let p = li[0].getElementsByTagName("p")[0];
                        a.innerHTML = "Sorry";
                        h6.innerHTML = "";
                        p.innerHTML = "No Result Found.";
                    }
                }
            };
        }

        saveAcronym() {
            let acronym = this.shadowRoot.querySelector('#myInput1').value;
            let fullForm = this.shadowRoot.querySelector('#myInput2').value;
            let briefDescription = this.shadowRoot.querySelector('#myInput3').value;
            let detailedDescription = this.shadowRoot.querySelector('#myInput4').value;
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://us-central1-acronym-search-2c665.cloudfunctions.net/mockAPI');
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            if (acronym && fullForm) {
                xhr.send([JSON.stringify({
                    "id": Math.floor(Math.random() * 20),
                    "acronym": acronym,
                    "fullForm": fullForm,
                    "briefDescription": briefDescription,
                    "detailedDescription": detailedDescription
                })]);
            }
            xhr.onload = function () {
                if (xhr.status != 200) {
                    li[0].style.display = "none";
                } else {
                    if (xhr.response.indexOf("Success") > 0) {
                        alert("Acronym Added");
                    }
                }
            };

        }
        closeChatWindow() {
            if (this.popUp.style.display == "block") {
                this.popUp.style.display = "none";
                this.widgetButton.style.display = "block";
                this.inputField.value = "";
                this.readMoreContent.style.display = "none";
                let li = this.shadowRoot.querySelector('li').style.display = "none";
            }

        }

        toggleModal() {
            if (this.modal.style.opacity == 1 && this.modal.style.display == "block") {
                this.modal.style.opacity = 0;
                this.modal.style.display = "none";
                this.widgetButton.style.display = "block";
                return;
            }
            this.modal.style.opacity = 1;
            this.modal.style.display = "block";
        }
        toggleReadMoreModal() {
            if (this.readMoreModal.style.opacity == 1 && this.readMoreModal.style.display == "block") {
                this.readMoreModal.style.display = "none";
                this.readMoreModal.style.opacity = 0;
                return;
            }
            this.readMoreModal.style.display = "block";
            this.readMoreModal.style.opacity = 1;
        }

        openForm() {
            if (this.popUp.style.display == "block") {
                this.popUp.style.display = "none";
                this.widgetButton.style.display = "block";
                return;
            }
            this.popUp.style.display = "block";
            this.widgetButton.style.display = "none";
        }
        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'position':
                    if (this.shadowRoot.querySelector('#widgetButton') && newValue) {
                        if (newValue !== "rightbottom") {
                            this.shadowRoot.querySelector('#widgetButton').classList.remove("rightbottom");
                            this.shadowRoot.querySelector('#myForm').classList.remove("rightbottom");
                            this.shadowRoot.querySelector('#widgetButton').classList.add(newValue);
                            this.shadowRoot.querySelector('#myForm').classList.add(newValue);
                        }

                    }
                    break;
            }
        }
        static get observedAttributes() {
            return ['position'];
        }
        disconnectedCallback() {
            // Disconnected means unmounting of the component
            console.log('Disconnected callback hook for any book keeping');
        }

    }

    // window.onload = () => {
    //     setTimeout(() => {
    //         document.querySelectorAll('#searchLink, #form').hidden = true;
    //         document.querySelectorAll('#search, #contributorLink').hidden = false;
    //     }, 1000);
    //   }

    window.customElements.define('acronym-search-ncr', AcronymSearchNCR);
   })();
