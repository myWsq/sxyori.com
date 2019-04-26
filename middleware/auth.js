export default function({ store, redirect,req,route }) {
    if (!store.state.me) {
        redirect('/login?from=' + route.path)
    }
}
