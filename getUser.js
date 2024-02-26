function getUser(email) {
    db.collection("users").where("email", "==", email).get().then((user) => {
        return user
    })
}