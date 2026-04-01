package flowDesk.Todo.domain;


public enum TodoPriority {
    NONE(0), LOW(1), MEDUIM(2), HIGH(3), CRITICAL(4);

    private final int value;
    TodoPriority(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
