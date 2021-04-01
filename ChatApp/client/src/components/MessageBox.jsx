import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';

const MessageBox = (props) => {
    const [userMessage, setUserMessage] = useState("");

    const keyListener = (e) => {
        console.log(e)
        let keyMap = {};
        keyMap[e.code] = e.type === "keydown"
        if (e.code === "Enter" && e.type === "keydown") {
            // if (keyMap.ShiftLeft == true || keyMap.ShiftRight == true){
            //     e.preventDefault();
            //     document.getElementById("submitMessage").appendChild("<br>");
            // } else {

            // }
            e.preventDefault();
            document.getElementById("submitMessage").click();
            clearMessageBox();
        }
    }

    const clearMessageBox = () => {
        // delete each child element
        while (document.getElementById("messageInputBox").firstChild) {
            document.getElementById("messageInputBox").removeChild(
                document.getElementById("messageInputBox")
                    .firstChild
            );
        }
        // clear the inner text in case there is any message
        // left
        document.getElementById("messageInputBox").innerText = "";
        console.log("clearing Message")
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // for each pasted item, grab each pasted image if any
        let imgSrcArr = [];
        for (let i = 0; i < document.getElementById("messageInputBox").children.length; i++) {
            let temp = document.getElementById("messageInputBox").children[i];
            if (temp.tagName == "IMG") {
                imgSrcArr.push(temp.src);
            }
        }
        // find any language filter that the user has set in the
        // message box. this is the language that will appear in
        // the thread
        const langFilter = document.getElementById("languageFilter").value;
        // submit the message
        props.submitMessage({
            text: document.getElementById("messageInputBox").innerText,
            images: imgSrcArr,
            langFilter: langFilter,
        });
        clearMessageBox();
    }

    const LANGS = {
        'none': '(None)',
        'auto-detect': 'Auto-detect',
        af: 'Afrikaans',
        am: 'Amharic',
        ar: 'Arabic',
        as: 'Assamese',
        az: 'Azerbaijani',
        bg: 'Bulgarian',
        bn: 'Bangla',
        bs: 'Bosnian',
        ca: 'Catalan',
        cs: 'Czech',
        cy: 'Welsh',
        da: 'Danish',
        de: 'German',
        el: 'Greek',
        en: 'English',
        es: 'Spanish',
        et: 'Estonian',
        fa: 'Persian',
        fi: 'Finnish',
        fil: 'Filipino',
        fj: 'Fijian',
        fr: 'French',
        'fr-CA': 'French (Canada)',
        ga: 'Irish',
        gu: 'Gujarati',
        he: 'Hebrew',
        hi: 'Hindi',
        hr: 'Croatian',
        ht: 'Haitian Creole',
        hu: 'Hungarian',
        hy: 'Armenian',
        id: 'Indonesian',
        is: 'Icelandic',
        it: 'Italian',
        iu: 'Inuktitut',
        ja: 'Japanese',
        kk: 'Kazakh',
        km: 'Khmer',
        kmr: 'Kurdish (Northern)',
        kn: 'Kannada',
        ko: 'Korean',
        ku: 'Kurdish (Central)',
        lo: 'Lao',
        lt: 'Lithuanian',
        lv: 'Latvian',
        mg: 'Malagasy',
        mi: 'Maori',
        ml: 'Malayalam',
        mr: 'Marathi',
        ms: 'Malay',
        mt: 'Maltese',
        mww: 'Hmong Daw',
        my: 'Myanmar',
        nb: 'Norwegian',
        ne: 'Nepali',
        nl: 'Dutch',
        or: 'Odia',
        otq: 'Querétaro Otomi',
        pa: 'Punjabi',
        pl: 'Polish',
        prs: 'Dari',
        ps: 'Pashto',
        pt: 'Portuguese (Brazil)',
        'pt-PT': 'Portuguese (Portugal)',
        ro: 'Romanian',
        ru: 'Russian',
        sk: 'Slovak',
        sl: 'Slovenian',
        sm: 'Samoan',
        sq: 'Albanian',
        'sr-Cyrl': 'Serbian (Cyrillic)',
        'sr-Latn': 'Serbian (Latin)',
        sv: 'Swedish',
        sw: 'Swahili',
        ta: 'Tamil',
        te: 'Telugu',
        th: 'Thai',
        ti: 'Tigrinya',
        'tlh-Latn': 'Klingon (Latin)',
        'tlh-Piqd': 'Klingon (pIqaD)',
        to: 'Tongan',
        tr: 'Turkish',
        ty: 'Tahitian',
        uk: 'Ukrainian',
        ur: 'Urdu',
        vi: 'Vietnamese',
        yua: 'Yucatec Maya',
        yue: 'Cantonese (Traditional)',
        'zh-Hans': 'Chinese Simplified',
        'zh-Hant': 'Chinese Traditional'
    }

    return (
        <form className="messageInput" onSubmit={submitHandler}>
            <select id="languageFilter">
                {
                    Object.entries(LANGS).map((item,key)=>{
                        return(
                            <option key={key} value={item[0]}>{item[1]}</option>
                        )
                    })
                }
            </select>
            <div
                contentEditable={true}
                value={userMessage}
                onKeyDown={(e) => { keyListener(e) }}
                // onKeyUp={(e)=>{keyListener(e)}}
                id="messageInputBox"></div>
            <button id="submitMessage">Send</button>
        </form>
    )
}

export default MessageBox;