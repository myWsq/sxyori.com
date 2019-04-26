export default function({ store, redirect }) {
    if (!(store.state.me && store.me.role === 'ADMIN')) {
        redirect('/403')
    }
}
