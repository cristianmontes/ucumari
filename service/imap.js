var Imap = require('imap');
var inspect = require('util').inspect;

var imap = new Imap({
  user: 'cmontes@livhes.com',
  password: 'Amancio21',
  host: 'livhes.com',
  port: 993,
  tls: true
});

function openInbox(readBox) {
  imap.getBoxes('', getBoxes);
  imap.openBox('INBOX', true, readBox);


}

imap.once('ready', function(){
  console.log('Listo para leer');
});

function getBoxes(err, boxes){
  console.log('Leyendo los boxes');
  console.log(boxes);
}

/*
function readBox(){
  //var fe = imap.seq.fetch();
  var fe = imap.seq.fetch('1:'+box.messages.total , {
    bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
    struct: true
  });

  fe.on('message', function(msg, seqno) {
      console.log('Message #%d', seqno);
      var prefix = '(#' + seqno + ') ';
      msg.on('body', function(stream, info) {
        var buffer = '';
        stream.on('data', function(chunk) {
          buffer += chunk.toString('utf8');
        });
        stream.once('end', function() {
          console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
        });
      });
      msg.once('end', function() {
        console.log(prefix + 'Finished');
      });
    });
  fe.once('error', function(err) {
    console.log('Fetch error: ' + err);
  });
  fe.once('end', function() {
    console.log('Done fetching all messages!');
    imap.end();
  });

};*/

imap.once('ready', function() {
  openInbox(function(err, box) {
    if (err) throw err;
    var f = imap.seq.fetch('1:'+box.messages.total, {
      bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
      struct: true
    });
    f.on('message', function(msg, seqno) {
      console.log('Message #%d', seqno);
      var prefix = '(#' + seqno + ') ';
      msg.on('body', function(stream, info) {
        var buffer = '';
        stream.on('data', function(chunk) {
          buffer += chunk.toString('utf8');
        });
        stream.once('end', function() {
          console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
        });
      });
      msg.once('attributes', function(attrs) {
        //console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
      });
      msg.once('end', function() {
        console.log(prefix + 'Finished');
      });
    });
    f.once('error', function(err) {
      console.log('Fetch error: ' + err);
    });
    f.once('end', function() {
      console.log('Done fetching all messages!');
      imap.end();
    });
  });
});

imap.once('error', function(err) {
  console.log(err);
});

imap.once('end', function() {
  console.log('Connection ended');
});

imap.connect();
