import sentImg from './images/sent.png';
import leftImg from './images/left.png';

function Sent() {

    return (
        <div class="container">
            <div class="navbar">
                <a class="another1" href="javascript:history.back()">
                    <img src={leftImg} width="24" height="24" />
                </a></div>
            <div class="space1"></div>
            <img class="check" src={sentImg} />
            <div class="space2"></div>
            <h1 class="sent">Sent!</h1>
            <div class="space4"></div>
            <div class="space2"></div>
            <div class="space2"></div>
            <a class="another another1" href="javascript:history.back()">Send another message</a>
        </div>)
}

export default Sent;