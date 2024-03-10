firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.assign("/login-page.html");
    }
});