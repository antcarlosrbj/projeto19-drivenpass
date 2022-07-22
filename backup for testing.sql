DELETE FROM credential;
DELETE FROM secure_note;
DELETE FROM wifi;
DELETE FROM cards;
DELETE FROM registers;
DELETE FROM users;

INSERT INTO users ("id","email","password") VALUES (1,'antonio@antonio.com','$2b$10$g7ZiR8do00.OXyO1HPm.GOLzmrkCwCRo1yazomSRzD3DbaSJQGW0.');
INSERT INTO users ("id","email","password") VALUES (2,'Goyette.52019100a667@thunderclient.com','$2b$10$exQDVtlftgLsPKEx2mqb3eL1D3MOIxubdctkOoxS7lF4EebD4zH1q');
INSERT INTO users ("id","email","password") VALUES (3,'Daniel.eb5fe5aaf454@apple.com','$2b$10$umtMMvjsTBiQqDMfqy0MGOUPWjTLFZfCcLrVBrrV/3dZNuVKR8u5a');
INSERT INTO users ("id","email","password") VALUES (4,'DuBuque.2e4ce90b9f6d@yahoo.com','$2b$10$ZLHpMtHayi7V5Lna9yQQJ.bKC5DexiGuXH0d5ia4YUQPxEGoaLmOK');
INSERT INTO users ("id","email","password") VALUES (5,'Goodwin.6b14578df99f@hotmail.com','$2b$10$Zwl8CNq3.odji/fGtzpBceRkkxWLD/27Ar8LgxGeAZjk1vHGNODNW');
INSERT INTO users ("id","email","password") VALUES (6,'Gottlieb.69bbcad6bda5@yahoo.com','$2b$10$bNPkR93p1eNXvysEzbeF9.80lTUI3MfNndRQbf8ZVE6C7zUf/HUHW');
INSERT INTO users ("id","email","password") VALUES (7,'Gleichner.37846a8cd429@hotmail.com','$2b$10$6zCNZOCSoHKwRFaQRpbWo.SvUGLG2BqsRZiwS4u6VKxprfbovYiCW');
INSERT INTO users ("id","email","password") VALUES (8,'Cormier.11c36f9e31af@icloud.com','$2b$10$0ocHnTcRdD9qGHGZORlRfe1IQieQQrHq/FUsHNGc3bYqWNDD/V5xi');

INSERT INTO registers ("id","title","userId","category") VALUES (6,'Google',1,'credential');
INSERT INTO registers ("id","title","userId","category") VALUES (22,'Youtube',1,'credential');
INSERT INTO registers ("id","title","userId","category") VALUES (23,'Nota super segura',1,'secure_note');
INSERT INTO registers ("id","title","userId","category") VALUES (26,'Carter e221a792e36e',1,'credential');
INSERT INTO registers ("id","title","userId","category") VALUES (27,'Cole c10e82ae7384',1,'credential');
INSERT INTO registers ("id","title","userId","category") VALUES (28,'Carter 2bf020a05eee',1,'secure_note');
INSERT INTO registers ("id","title","userId","category") VALUES (29,'Effertz bdb466c0d470',1,'credential');
INSERT INTO registers ("id","title","userId","category") VALUES (30,'Feest e49cc8d0eafa',1,'secure_note');
INSERT INTO registers ("id","title","userId","category") VALUES (31,'Do Daniel',3,'credential');
INSERT INTO registers ("id","title","userId","category") VALUES (34,'Denesik 1fb02aab2ce7',2,'wifi');
INSERT INTO registers ("id","title","userId","category") VALUES (25,'Meu cartao',2,'cards');
INSERT INTO registers ("id","title","userId","category") VALUES (37,'Gorczany b51a58075b22',1,'credential');
INSERT INTO registers ("id","title","userId","category") VALUES (38,'Boyer e66c62add4b1',1,'secure_note');
INSERT INTO registers ("id","title","userId","category") VALUES (39,'Eichmann 9152d192ef26',1,'wifi');
INSERT INTO registers ("id","title","userId","category") VALUES (40,'Clark 359900021557',1,'cards');
INSERT INTO registers ("id","title","userId","category") VALUES (41,'fjalfakfaf',1,'wifi');
INSERT INTO registers ("id","title","userId","category") VALUES (42,'jnsakdjfs',1,'cards');

INSERT INTO cards ("id","number","name","securityCode","expirationDate","password","type","registerId") VALUES (1,'41454124','Antonio','555','10/25','ce77dbe08bee17f402ecaa297ce6a5b3893e01af1280135f78c0a5d15ad112a62bcacb6a1dba35ed15d186e3299c39af89ac05d00c3b863eb5ada7f4486847b900f45b8d8b1a5db251d214e3cd2394f078a2d33ec4f7d36a2569501cd50e92672eb426a4','debit',42);
INSERT INTO cards ("id","number","name","securityCode","expirationDate","password","type","registerId") VALUES (3,'505766','Clark 359900021557','Clark 359900021557','Clark 359900021557','0d0dc4df9db51624bb5b35dca7086c2e2355e68dbd02097d61147999edb95e32d860f5d0dc91ddebcb87a4784abe41ef62bc582e2a6688ab1e28785180387be1023ca4f83567f23fcc1a50304b37d40feeca67e5aaf41c99f5b16ad1f51d44703f10829d6ff049a1ac0eae157d6d316e6cf0','Clark 359900021557',40);

INSERT INTO wifi ("id","name","password","registerId") VALUES (5,'Denesik 1fb02aab2ce7','d03eb4393032c5d2d80b3dcf97ee4a30121a741d3ac7a227caf6f8b167157e3fb2a0ae33be905f10ee00c1a26eaa8600dc97eec8e747a941c75d6eead48f905c34ac8c2833eb5f3d043acf0a2cc7eab5e45300dfe772510a8df35c11e841ddc7bdcc5e4c6382523bd34d845818873137c000da3b',34);
INSERT INTO wifi ("id","name","password","registerId") VALUES (7,'Eichmann 9152d192ef26','358e706e28ab8d9c240923b1b099dff4349cb1abe16c052c1deb42de050d504922283411ef669675c89c14512874c2b5d529bcb8f848437a5b8f6de646922607567ee96e2be8bb532d43c497e70f92be8b01745af5bc92d092ae63a2434f15625c6030c2f1c5b11a31d8894d809cd358ae24c9aaa0',39);
INSERT INTO wifi ("id","name","password","registerId") VALUES (8,'lkaEichmann 9152d192ef26','358e706e28ab8d9c240923b1b099dff4349cb1abe16c052c1deb42de050d504922283411ef669675c89c14512874c2b5d529bcb8f848437a5b8f6de646922607567ee96e2be8bb532d43c497e70f92be8b01745af5bc92d092ae63a2434f15625c6030c2f1c5b11a31d8894d809cd358ae24c9aaa0',41);

INSERT INTO secure_note ("id","note","registerId") VALUES (2,'Essa é a minha anotação',23);
INSERT INTO secure_note ("id","note","registerId") VALUES (3,'Carter 2bf020a05eee',28);
INSERT INTO secure_note ("id","note","registerId") VALUES (4,'Feest e49cc8d0eafa',30);
INSERT INTO secure_note ("id","note","registerId") VALUES (6,'Boyer e66c62add4b1',38);

INSERT INTO credential ("id","url","user","password","registerId") VALUES (2,'http://www.google.com','Antonio','56133615bd61b7efdca2ef86b9396c3482260f80f159de452c90f0d6e775c30d3c1cab2ae1b1edfc9f8c6f69bb49f7cb83b88111c9e45685bc633356261e0ccf478425d48c4097ee7afa8bbda4f736b13209652efd3ec405181346145aa2f620d755c9',6);
INSERT INTO credential ("id","url","user","password","registerId") VALUES (12,'http://www.youtube.com','Carlos','ef342e64d76b111a9a3968925391b899d52b9008eb7f1fffd3058b3d7666bfcde9729dce4a971cd69f6b8f177ef902aefd45c1ac6ef76310746950e91e271ad0c57bf23e9092f548980c0a5d5b0012ea4302fc01ac32171916215f6d85209607d321c527eb19',22);
INSERT INTO credential ("id","url","user","password","registerId") VALUES (13,'http://www.youtube.com','Antonio','e7d5d538131fc8700054a6e86598d02fcf9c8540f7cd75807aedfd39fd8eed209025de39041a88ed00a672b879ebd83b0b417aff6215615de66655a34a91436afbddf07a7e0daebfbc8d6c37ac0804d1fdec1d9a5c39085351cc94bd80ef1728cd4d9d',26);
INSERT INTO credential ("id","url","user","password","registerId") VALUES (14,'http://www.youtube.com','Antonio','8e120d5795d43327e6ac1688b9a40f8ec432c3504c3dd46d33c8d7ccd5a65f5e08b24e9ae6237208ba6b8f64f235e63e94e0b4086e18433024acbe0918e2e7dc9852001272570d71e23276129d141a03bb5e3e036f80378313b154b810ac060f1549d8',27);
INSERT INTO credential ("id","url","user","password","registerId") VALUES (15,'http://www.youtube.com','Antonio','dd7a6994c19cc9860c34af4c28c8d8bea5e00e92da30076bb8307871884df0dd2ce57330201dbd68207230b057f9e5f108ab1e3c51805c566ee67ece924cb487bb6c2a83ba053a5c22847a48ce8b48e91465a342dad99cd2a480308315888bd6867812',29);
INSERT INTO credential ("id","url","user","password","registerId") VALUES (16,'http://www.daniel.com','Niel','56133615bd61b7efdca2ef86b9396c3482260f80f159de452c90f0d6e775c30d3c1cab2ae1b1edfc9f8c6f69bb49f7cb83b88111c9e45685bc633356261e0ccf478425d48c4097ee7afa8bbda4f736b13209652efd3ec405181346145aa2f620d755c9',31);
INSERT INTO credential ("id","url","user","password","registerId") VALUES (18,'http://www.youtube.com','Antonio','585198b935d8076e514444c637702135e9ee69ceefbe648a3208f243a1cd027b59b73dd539fb230253628219b2c740ae8e30febfa2832eb47c86867c746ec283e45f319e4bd844a72628e7428d007584577cb1ed128c85b044d8cbcb993cbc9e39d9e6',37);
