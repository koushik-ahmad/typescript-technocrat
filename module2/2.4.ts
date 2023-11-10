{
    //
    // interface - generic
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
        bike?: X
    }

    // type 
    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'Koushik',
        computer: {
            brand: 'Asus',
            model: 'X-255UR',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'Kw66',
            display: 'OLED'
        }
    }


    // interface
    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Rich Dev',
        computer: {
            brand: 'Hp',
            model: 'X-2R',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'something',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '100cc'
        }
    }
















    // 
}