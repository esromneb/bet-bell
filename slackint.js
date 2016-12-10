

function handle_hook(params)
{
    var res = ' ';
    
    var text = "lunch"; // default value
    if (params['text'] && params['text'].length > 0)
    {
        text = params['text'];
    }

    switch(text)
    {   
        case '':
        case '1':
        case 'lunch':
            res = "Ringing Short Bell...";
        break;
        case '2':
        case 'long':
            res = 'Ringing Long Bell...';
            break;
        case '3':
        case 'morse':
        res = "Ringing 3..."
        break;
        default:
        case 'help':
            res = help_menu;
        break;
    }

    return res;
}

var help_menu = "\n\n--Use the /bell command alone to ring a short bell. \nYou can also use /bell with a number.\n\n\n  1: short bell\n\n  2: long bell\n\n  3: wat?\n\n  help: this message, duh\n";

/// Tests etc ///












module['exports'] = function helloWorld (hook) {
  // hook.req is a Node.js http.IncomingMessage
  // var host = hook.req.host;
  var p = hook.params;
  var outp = handle_hook(p);
  hook.res.end(outp);
};

