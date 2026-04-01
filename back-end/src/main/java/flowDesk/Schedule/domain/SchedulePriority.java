package flowDesk.Schedule.domain;

public enum SchedulePriority {
    NONE(0), LOW(1), MEDUIM(2), HIGH(3), CRITICAL(4);

    private final int value;
    SchedulePriority(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
