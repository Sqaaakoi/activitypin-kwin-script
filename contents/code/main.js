function windowActivityPin() {
    let client = workspace.activeClient;
    if (!client) return;
    if (client.activities.length == 0) {
        // Window is already pinned to all activities; pin it to only here
        client.activities = [workspace.currentActivity];
    } else {
        client.activities = [];
    }
}

function windowActivityUnpin() {
    let client = workspace.activeClient;
    if (!client) return;
    if (client.activities.length == 0) {
        client.activities = workspace.activities.filter(function(activity) {
            return activity != workspace.currentActivity;
        });
    } else {
        client.activities = client.activities.filter(function(activity) {
            return activity != workspace.currentActivity;
        });
    }
}

registerShortcut("Toggle window on all activities", "Toggle window on all activities", "Meta+Ctrl+Tab", windowActivityPin);
registerShortcut("Remove window from this activity", "Remove window from this activity", "Meta+Ctrl+Shift+Tab", windowActivityUnpin);