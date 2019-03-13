(function(){
    const D = document;
    function createElement(el) {
        return D.createElement(el);
    }
    function styleComponent(component, styleType, style) {
        return component.style[styleType] = style;
    }
    function handleAttr(component, attr, type) {
        return component[attr] = type;
    }
    function navigation() {
        const navigation = D.querySelector(".navigation");
        styleComponent(navigation, "backgroundColor", "lightgray");
        styleComponent(navigation, "paddingBottom", "10px");
        const nav = createElement("nav");
        const ul = createElement("ul");
        const header = createElement("h1");
        styleComponent(header, "fontSize", "30px");
        handleAttr(header, "innerText", "TheLookBook");
        styleComponent(ul, "display", "flex");
        styleComponent(ul, "justifyContent", "space-evenly");
        const headerLi = createElement("li");
        const homeLi = createElement("li");
        const aboutLi = createElement("li");
        const loginLi = createElement("li");
        const home = createElement("a");
        const about = createElement("a");
        const login = createElement("a");
        headerLi.appendChild(header);
        homeLi.appendChild(home);
        aboutLi.appendChild(about);
        loginLi.appendChild(login);
        ul.appendChild(headerLi);
        ul.appendChild(homeLi);
        ul.appendChild(aboutLi);
        ul.appendChild(loginLi);
        styleComponent(home, "textDecoration", "none");
        styleComponent(about, "textDecoration", "none");
        styleComponent(login, "textDecoration", "none");
        handleAttr(home, "href", "index.html");
        handleAttr(home, "innerText", "Home");
        handleAttr(about, "href", "about.html");
        handleAttr(about, "innerText", "About");
        handleAttr(login, "href", "#login");
        handleAttr(login, "innerText", "Login");
        nav.appendChild(ul);
        navigation.append(nav);
        return navigation;
    }
    function pictureContent() {
        const main = D.querySelector(".main");
    }
    navigation();
    pictureContent();
}());
