// Twitter 認証でログインの仕方
const provider = new firebase.auth.TwitterAuthProvider()
firebase.auth().signInWithPopup(provider)

// ログアウトの仕方
firebase.auth().signOut()

// ログイン状態の確認の仕方
// オブザーバーの登録
firebase.auth().onAuthStateChanged(user => {
  // ログイン状態ならuserが取得できる
  this.user = user ? user : {}
})
