# Simple KWin script to toggle a window being shown on all activities

# Installation

1. Clone this repository.
2. Run `kpackagetool6 -t KWin/Script -i .` in the root directory of the repository.
3. Go to `System Settings > Window Management > KWin Scripts`
4. Enable "Toggle pinning window to all activities"
5. Enjoy!

# Features
- Literally just 2 shortcut keys
  - "Toggle window on all activities" - Meta+Ctrl+Tab
    - Toggles the currently shown window to be shown on all activities or only the current activity
  - "Remove window from this activity" - Meta+Ctrl+Shift+Tab
    - Removes the currently shown window from the current activity (or shows the window on all activities if this is the only activity that the window is visible on)

# Usage
This was mostly made for quickly moving windows to the correct activities after they automatically open on the wrong activity.

### Moving a window to another activity
1. Press the "Toggle window on all activities" shortcut to show the window on all activities.
2. Switch to the correct activity.
3. Press the "Toggle window on all activities" shortcut again to lock the window to the current activity.

### Quickly choose which activities you want a window on... badly.
1. Go to an activity you don't want the window to be displayed on.
2. Press the "Remove window from this activity" shortcut.
3. Repeat until the window is only displayed on the activities you want it to be displayed on.