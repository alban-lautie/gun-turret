#include <Servo.h>

Servo horizontal; Servo vertical; Servo shoot;

static int hPosition = 85;
static int vPosition = 10;
static int sPosition = 90;
static boolean rightIsShooted = false;


void setup() {
  horizontal.attach(14); //analog pin 0
  vertical.attach(15); //analog pin 1
  shoot.attach(16); //analog pin 2

  Serial.begin(19200);

  horizontal.write(hPosition);
  vertical.write(vPosition);
}

void loop() {
  if ( Serial.available()) {
    char ch = Serial.read();

    switch(ch) {
      case 'l':
        if (hPosition <= 170) {
          hPosition++;
        }
        horizontal.write(hPosition);
        break;
      case 'r':
        if (hPosition >= 90) {
          hPosition--;
        }
        horizontal.write(hPosition);
        break;

      case 'u':
        if (vPosition <= 150) {
          vPosition++;
        }
        vertical.write(vPosition);
        break;
      case 'd':
        if (vPosition >= 15) {
          vPosition--;
        }
        vertical.write(vPosition);
        break;

      case 's':
        if (rightIsShooted) {
          sPosition = 180;
          rightIsShooted = false;
        } else {
          sPosition = 0;
          rightIsShooted = true;
        }
        shoot.write(sPosition);
        delay(500);
        sPosition = 90;
        shoot.write(sPosition);
        break;
    }
  }
}
