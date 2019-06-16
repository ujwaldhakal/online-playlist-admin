export default function (state = [], action: any) {
    console.log(action);
    switch (action.type) {
        case "CURRENT_USER":
            let userData = false;
            if (typeof action.user.data !== "undefined") {
                userData = action.user.data[0];
            }
            return userData;
        default:
            return state;
    }
}
