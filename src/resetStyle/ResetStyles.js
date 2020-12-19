import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const ResetStyles = createGlobalStyle`
    ${reset}
    * {margin:0px; padding:0px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box}
    article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,main{display:block;}
    html{height:100%;}
    html,body {
        font-size:16px;
        font-family: 'Noto Sans KR', sans-serif;
        -webkit-overflow-scrolling: touch;
        overflow-x:hidden;
        color:#202020;
        &::-webkit-scrollbar {
            width: 8px;  /* 세로축 스크롤바 길이 */
            height: 8px;  /* 가로축 스크롤바 길이 */
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: #555;
        }   
        &::-webkit-scrollbar-track {
            background-color:#999;
        }
    }
    body{
        color: #333333;
        line-height:1.5; font-weight:400; -webkit-text-size-adjust: none;
    }
    fieldset, img {border:0 none;}
    img, input, a, button, label{vertical-align:middle;}
    img{ max-width:100%; max-height:100%;}
    table {border-spacing:0; border-collapse: collapse; word-break:keep-all}
    a {text-decoration:none; color:inherit; }
    ol, ul, dl,  li {list-style: none; }
    blockquote, q { quotes: none; }
    input, textarea, select{
        font-size:inherit;
        font-family:inherit;
        border:1px solid #ddd;
        color:#555;
        border-radius:0; background-color:#fff;
    }
    input,button,select {
        -webkit-border-radius: 0;
        border-radius: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none
    }
    select::-ms-expand { display: none; }
    button {
        border: 0;
        background: none;
        cursor: pointer; /*outline:none;*/
        overflow:hidden;
        font-family: 'Noto Sans KR', sans-serif
    }
    button:disabled {
        cursor: default
    }
    input[type=text]::-ms-clear {display: none;}  /*input의 x 버튼 제거 for IE */
    input[type=text], input[type=password], input[type=email], input[type=tel], input[type=number]{
        text-indent:10px;
    }
    input[type=text][readonly], input[type=password][readonly], input[type=email][readonly], input[type=tel][readonly] , input[type=number][readonly] {
        background:#eee; color:#888
    }
    input[type=password]{
        font-family:pass;
    }
    input::placeholder, textarea::placeholder{
        color:#aaa;
    }
    input:-ms-input-placeholder, textarea:-ms-input-placeholder{
        color:#aaa;
    }
    select{
        padding-left:10px;
        background-position: bottom 50% right 10px;
        background-size:9px;
    }
    select:disabled{
        background-position: bottom 50% right 10px;
        color:#888
    }
    textarea{
        resize:none;
        box-shadow:none;
    }
`;
export default ResetStyles;
