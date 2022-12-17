const car = {
    engine: false, // 시동상태
    distance: 0, // 주행거리
    name: '씽씽카', // 차 이름
    engineOn: () => {
        // 1. 시동이 꺼진상태
        if (car.engine == false) {
            // 시동이 꺼져 있는 상태에서만 시동을 킬 수 있게 해줌.
            console.log(`${car.name} 시동을 킵니다`);
            return (car.engine = true);
        } // 2. 시동이 켜진 상태에서 시동을 킬시
        else if (car.engine == true) {
            console.log('Warning! 시동이 켜져 있는 상태에서는 킬 수 없습니다.');
        }
    },

    engineOff: () => {
        //1.시동이 켜진상태
        if (car.engine == true) {
            //1-1 시동이 켜져 있고 주행거리가 40km 이상일 경우
            if (car.distance >= 40) {
                console.log('안전 주행을 위해 자동으로 시동을 종료합니다.');
                return (car.engine = false);
            }
            //1-2 시동은 켜져 있지만 주행을 하지 않은 경우
            else {
                console.log(`${car.name} 시동을 끕니다`);
                return (car.engine = false);
            }
        } //2. 시동이 꺼져 있는 상태에서 시동을 끌 경우
        else if (car.engine == false) {
            return console.log(
                'Warning! 시동이 꺼진 상태에서는 시동을 끌 수 없습니다.'
            );
        }
    },
    drive: () => {
        //1. 시동이 켜져 있는 경우. 주행가능
        if (car.engine == true) {
            console.log('주행을 시작합니다.');

            for (let i = 0; i <= 40; i++) {
                car.distance = i;
                console.log(`현재 주행거리 :${car.distance}KM`);
                if (car.distance == 40) {
                    car.engineOff();
                }
            }
        } //2. 시동이 꺼져 있는 상태. 주행불가
        else {
            console.log('시동을 킨 후 주행을 시작하십쇼');
        }
    },
};

car.engineOn();
car.drive();
