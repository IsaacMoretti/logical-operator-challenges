const isEmptyPostText = false;
const hasNotViolatedPolicies = true;
const hasAttachedMedia = false;

if (!isEmptyPostText && hasNotViolatedPolicies && hasAttachedMedia) {
    console.log("Post published");
} else {
    console.log("post not published");
}

if (isEmptyPostText) console.log("- The post text is empty");
if (!hasNotViolatedPolicies) console.log ("- Community policies were violated.");
if (!hasAttachedMedia) console.log("- No media was attached");