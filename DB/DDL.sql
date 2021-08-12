CREATE database therasight;
use therasight;

create table user (
	email varchar(100) primary key,
    name varchar(100) not null,
    phno varchar(13),
    avatar varchar(500), -- image link
    password varchar(500) not null    
);

create table client(
	email varchar(100) primary key,
    name varchar(100) not null,
    phno varchar(13)
);

create table consults(
	client_email varchar(100),
    user_email varchar(100),
    foreign key (client_email) references client (email) on delete cascade,
    foreign key (user_email) references user (email) on delete cascade,
    primary key (client_email, user_email)
);

create table session(
	id integer primary key,
    client_email varchar(100),
    app_time datetime not null, -- appointment time, MySQL displays DATETIME values in 'YYYY-MM-DD hh:mm:ss[.fraction]'
    insights varchar(500) not null, -- link to graph image, will have to use blob
    mse_report varchar(500) not null, -- link to pdf, blob
    foreign key (client_email) references client (email) on delete cascade
);

create table journal(
	id integer primary key,
	user varchar(100),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    entry varchar(10000), -- an entry is capped at 10,000 characters
    foreign key (user) references user (email) on delete cascade
);

