function(){
  const template = document.createElement('template');

    template.innerHTML = `<div class="button_box2">
        <div class="form-wrapper-2 cf">
            <input type="text" class="myInput" placeholder="Search here..." required>
            <button type="button">Search</button>
        </div>
    </div>
    <ul class="myUL">
        <li>
            <div class="headerSection">
                <h4>NCR</h4>
                <h6>National Cash Register </h6>
            </div>
            <div class="contentArea">
                <p>National Cash Register Company - now officially known as NCR Corporation A Product based
                    Organization.</p>
            </div>
        </li>
        <li>
            <div class="headerSection">
                <h4>CPQ</h4>
                <h6>National Cash Register </h6>
            </div>
            <div class="contentArea">
                <p>National Cash Register Company - now officially known as NCR Corporation A Product based
                    Organization.</p>
            </div>
        </li>
        <li>
            <div class="headerSection">
                <h4>BOC</h4>
                <h6>National Cash Register </h6>
            </div>
            <div class="contentArea">
                <p>National Cash Register Company - now officially known as NCR Corporation A Product based
                    Organization.</p>
            </div>
        </li>
        <li>
            <div class="headerSection">
                <h4>SOUP</h4>
                <h6>National Cash Register </h6>
            </div>
            <div class="contentArea">
                <p>National Cash Register Company - now officially known as NCR Corporation A Product based
                    Organization.</p>
            </div>
        </li>
        <li>
            <div class="headerSection">
                <h4>ERP</h4>
                <h6>National Cash Register </h6>
            </div>
            <div class="contentArea">
                <p>National Cash Register Company - now officially known as NCR Corporation A Product based
                    Organization.</p>
            </div>
        </li>
        <li>
            <div class="headerSection">
                <h4>ZORA</h4>
                <h6>National Cash Register </h6>
            </div>
            <div class="contentArea">
                <p>National Cash Register Company - now officially known as NCR Corporation A Product based
                    Organization.</p>
            </div>
        </li>
        <li>
            <div class="headerSection">
                <h4>EDL</h4>
                <h6>National Cash Register </h6>
            </div>
            <div class="contentArea">
                <p>National Cash Register Company - now officially known as NCR Corporation A Product based
                    Organization.</p>
            </div>
        </li>
        <li>
            <h4></h4>
            <p>No Result Found</p>
        </li>
    </ul>
    <style>
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
            width: 5em;
            color: lightslategray;
            margin: 0;
        }
        .headerSection h6 {
            margin: 0
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
        /* search box */
        .button_box2 {
            margin: 10% auto 5%;
            width: 40%;
        }
        /*-------------------------------------*/
        .cf:before,
        .cf:after {
            content: "";
            display: table;
        }
        .cf:after {
            clear: both;
        }
        .cf {
            zoom: 1;
        }
        /*-------------------------------------*/
        .form-wrapper-2 {
            width: 330px;
            padding: 15px;
            background: #6aa83e;
            -moz-border-radius: 10px;
            -webkit-border-radius: 10px;
            border-radius: 10px;
            -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .4) inset, 0 1px 0 rgba(255, 255, 255, .2);
            -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .4) inset, 0 1px 0 rgba(255, 255, 255, .2);
            box-shadow: 0 1px 1px rgba(0, 0, 0, .4) inset, 0 1px 0 rgba(255, 255, 255, .2);
        }
        .form-wrapper-2 input {
            width: 220px;
            /* height: 20px;
             */
            padding: 11px 5px;
            float: left;
            font: bold 15px 'Raleway', sans-serif;
            border: 0;
            background: #eee;
            -moz-border-radius: 3px 0 0 3px;
            -webkit-border-radius: 3px 0 0 3px;
            border-radius: 3px 0 0 3px;
        }
        .form-wrapper-2 input:focus {
            outline: 0;
            background: #fff;
            -moz-box-shadow: 0 0 2px rgba(0, 0, 0, .8) inset;
            -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, .8) inset;
            box-shadow: 0 0 2px rgba(0, 0, 0, .8) inset;
        }
        .form-wrapper-2 input::-webkit-input-placeholder {
            color: #999;
            font-weight: normal;
            font-style: italic;
        }
        .form-wrapper-2 input:-moz-placeholder {
            color: #999;
            font-weight: normal;
            font-style: italic;
        }
        .form-wrapper-2 input:-ms-input-placeholder {
            color: #999;
            font-weight: normal;
            font-style: italic;
        }
        .form-wrapper-2 button {
            overflow: visible;
            position: relative;
            float: right;
            border: 0;
            padding: 0;
            cursor: pointer;
            height: 40px;
            width: 110px;
            font: bold 15px/40px 'Raleway', sans-serif;
            color: #fff;
            text-transform: uppercase;
            background: #60c45f;
            -moz-border-radius: 0 3px 3px 0;
            -webkit-border-radius: 0 3px 3px 0;
            border-radius: 0 3px 3px 0;
            text-shadow: 0 -1px 0 rgba(0, 0, 0, .3);
        }
        .form-wrapper-2 button:hover {
            background: #60c45f;
        }
        .form-wrapper-2 button:active,
        .form-wrapper-2 button:focus {
            background: #60c45f;
        }
        .form-wrapper-2 button:before {
            content: '';
            position: absolute;
            border-width: 8px 8px 8px 0;
            border-style: solid solid solid none;
            border-color: transparent #60c45f transparent;
            top: 12px;
            left: -6px;
        }
        .form-wrapper-2 button:hover:before {
            border-right-color: #60c45f;
        }
        .form-wrapper-2 button:focus:before {
            border-right-color: #60c45f;
        }
        .form-wrapper-2 button::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
        .myUL {
            list-style-type: none;
            padding: 0;
            margin: 0 auto;
            width: 70%;
            font: bold 15px 'Raleway', sans-serif;
        }
        .myUL li {
            border: 1px solid #ddd;
            margin-top: -1px;
            /* Prevent double borders */
            background-color: #f6f6f6;
            padding: 12px;
            display:none
        }
        .myUL li a:hover:not(.header) {
            color: black;
        }
    </style>`;
    var importDoc = document.currentScript.ownerDocument;
    class AcronymSearchNCR extends HTMLElement {
        constructor() {
            super();
            console.log('New Acronym search object has been instantiated.');
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const htmlTemplate = importDoc.querySelector('template');
            shadowRoot.innerHTML = htmlTemplate.innerHTML;
            this.searchButton = this.shadowRoot.querySelector('button');
            this.searchButton.addEventListener('click', this._acronymSearch.bind(this));
        }

        _acronymSearch() {
            var input, filter, ul, li, a, i, txtValue;
            input = this.shadowRoot.querySelector('.myInput');
            filter = input.value.toUpperCase();
            ul = this.shadowRoot.querySelector('.myUL');
            li = ul.getElementsByTagName("li");
            if(filter){
                    for (i = 0; i < li.length; i++) {
                    a = li[i].getElementsByTagName("h4")[0];
                    txtValue = a.textContent || a.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "inherit";
                    } else {
                        li[i].style.display = "none";
                    }
                }

            }else{
            
                var liArray = [...li];
                let x = liArray.filter((li)=>{
                    return li.style.display === 'inherit';
                })
                if(x.length == 0){
                    li[li.length-1].style.display = 'inherit';
                }
            }
        }


    }

    window.customElements.define('acronym-search-ncr', AcronymSearchNCR);

})();
