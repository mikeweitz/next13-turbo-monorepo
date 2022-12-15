import { ChangeEvent, Dispatch, useEffect, useState } from 'react';

import BrandedBorderLabelSelect from '@tb-core/components/styled/form-controls/branded-border-label-select';
import BrandedDatePicker from '@tb-core/components/styled/form-controls/branded-date-picker';
import { DisplaySections } from '@tb-public/types';

import styles from './styles.module.scss';

interface DateTimeProps {
    dateLabel: string;
    displaySections: DisplaySections;
    minDateBoundary?: number;
    setDisplaySections: Dispatch<DisplaySections>;
    timeLabel: string;
    visitDateTime?: string;
}

const DateTime = ({
    dateLabel,
    displaySections,
    minDateBoundary = 0,
    setDisplaySections,
    timeLabel,
    visitDateTime
}: DateTimeProps) => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState(new Date());
    const todaysDate = new Date();
    const minDate = new Date();
    // Get min date possible for a contact form submission
    minDate.setDate(todaysDate.getDate() - minDateBoundary);

    const getTimeOptions = () => {
        const format = (n: number) => (n < 10 ? `0${n}` : n);
        const amTimes = [];
        const pmTimes = [];

        for (let i = 1; i < 13; i++) {
            for (let j = 0; j < 59; j += 30) {
                amTimes.push({
                    children: `${format(i)}:${format(j)} AM`,
                    value: `${format(i)}:${format(j)} AM`
                });
                pmTimes.push({
                    children: `${format(i)}:${format(j)} PM`,
                    value: `${format(i)}:${format(j)} PM`
                });
            }
        }

        return [
            { children: 'Time (HH:MM)', disabled: true, value: '' },
            ...amTimes,
            ...pmTimes
        ];
    };

    const onChangeTime = (event: ChangeEvent<HTMLSelectElement>) =>
        setTime(event.target.value);
    const onChangeDate = (value: Date) => setDate(value);

    useEffect(() => {
        setDisplaySections({
            ...displaySections,
            location: !!(time && date)
        });
    }, [time, date]);

    return (
        <>
            <label>{visitDateTime}</label>
            <div className={styles['date-time-row']}>
                <div className={styles['date-picker']}>
                    <BrandedDatePicker
                        changeHandler={onChangeDate}
                        label={dateLabel}
                        maxDate={todaysDate}
                        minDate={minDate}
                        required={true}
                        svgId="icon-arrow-down-alt"
                    />
                </div>
                <div className={styles['date-time']}>
                    <BrandedBorderLabelSelect
                        defaultValue=""
                        label={timeLabel}
                        name="time"
                        onChange={onChangeTime}
                        options={getTimeOptions()}
                        required
                    />
                </div>
            </div>
        </>
    );
};

export default DateTime;
