var gestureString = "";
if (frame.gestures.length > 0) {
  for (var i = 0; i < frame.gestures.length; i++) {
    var gesture = frame.gestures[i];
    gestureString += "Gesture ID: " + gesture.id + ", "
                  + "type: " + gesture.type + ", "
                  + "state: " + gesture.state + ", "
                  + "hand IDs: " + gesture.handIds.join(", ") + ", "
                  + "pointable IDs: " + gesture.pointableIds.join(", ") + ", "
                  + "duration: " + gesture.duration + " &micro;s, ";

    switch (gesture.type) {
      case "circle":
        gestureString += "center: " + vectorToString(gesture.center) + " mm, "
                      + "normal: " + vectorToString(gesture.normal, 2) + ", "
                      + "radius: " + gesture.radius.toFixed(1) + " mm, "
                      + "progress: " + gesture.progress.toFixed(2) + " rotations";
        break;
      case "swipe":
        gestureString += "start position: " + vectorToString(gesture.startPosition) + " mm, "
                      + "current position: " + vectorToString(gesture.position) + " mm, "
                      + "direction: " + vectorToString(gesture.direction, 2) + ", "
                      + "speed: " + gesture.speed.toFixed(1) + " mm/s";
        break;
      case "screenTap":
      case "keyTap":
        gestureString += "position: " + vectorToString(gesture.position) + " mm, "
                      + "direction: " + vectorToString(gesture.direction, 2);
        break;
      default:
        gestureString += "unknown gesture type";
    }
    gestureString += "<br />";
  }
}
