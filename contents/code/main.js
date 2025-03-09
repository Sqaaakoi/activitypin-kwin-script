// client.activities being empty means shown on all activities

function windowActivityPin() {
    let client = workspace.activeWindow;
    if (!client) return;
    if (client.activities.length == 0) {
        // Window is already pinned to all activities; pin it to only here
        client.activities = [workspace.currentActivity];
    } else {
        // Show the window on all activities
        client.activities = [];
    }
}

function windowActivityUnpin() {
    let client = workspace.activeWindow;
    if (!client) return;
    if (client.activities.length == 0) {
        // client.activities is empty; and logically can be considered as all of the activities.
        client.activities = workspace.activities.filter(function(activity) {
            return activity != workspace.currentActivity;
        });
    } else {
        // If this is the only activity that the window is shown on, this will show the window on all activities
        client.activities = client.activities.filter(function(activity) {
            return activity != workspace.currentActivity;
        });
    }
}

registerShortcut("Toggle window on all activities", "Toggle window on all activities", "Meta+Ctrl+Tab", windowActivityPin);
registerShortcut("Remove window from this activity", "Remove window from this activity", "Meta+Ctrl+Shift+Tab", windowActivityUnpin);