package flowDesk.User;

import flowDesk.Schedule.domain.Schedule;
import flowDesk.Todo.domain.Todo;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "user_id", columnDefinition = "uuid", updatable = false, nullable = false)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String nickname;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String phone;

    @CreationTimestamp
    private LocalDateTime created_at;

    @UpdateTimestamp
    private LocalDateTime updated_at;

    @OneToMany(mappedBy = "user")
    private List<Schedule> scheduleList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Todo> todoList = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private UserStatus userStatus;

    @Builder
    public User(UUID userId, String nickname, String email, String password, String phone) {
        this.id = userId;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}
