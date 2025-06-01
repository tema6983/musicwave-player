// Расширенный список треков
let tracks = [
    { id: '1', title: "New Jeans", artist: "New Jeans", cover: "media2/New Jeans.png", file: "media/New Jeans.mp3", popular: true,},
    { id: '2', title: "Дурак и молния", artist: "Король и шут", cover: "media2/Король и шут.png", file: "media/Дурак и молния.mp3", popular: true,},
    { id: '3', title: "Trenchtown", artist: "MiyaGi", cover: "media2/MiyaGi.png", file: "media/Trenchtown.mp3", popular: true,},
    { id: '4', title: "Slow Mo", artist: "Скриптонит", cover: "media2/Скриптонит.png", file: "media/Slow Mo.mp3", popular: true,},
    { id: '5', title: "Chest Pain (I Love)", artist: "Malcolm Todd", cover: "media2/Malcolm Todd.png", file: "media/Chest Pain (I Love).mp3", popular: true,},
    { id: '6', title: "Пачка сигарет", artist: "Круппа крови", cover: "media2/Круппа крови.png", file: "media/Пачка сигарет.mp3", popular: true,},
    { id: '7', title: "LABIRINT", artist: "Face", cover: "media2/Face.png", file: "media/LABIRINT.mp3", popular: true,},
    { id: '8', title: "two", artist: "bbno$", cover: "media2/two.png", file: "media/two.mp3", popular: true,},
    { id: '9', title: "Golden Hour", artist: "JVKE", cover: "media2/Golden Hour.png", file: "media/Golden Hour.mp3", popular: true,},
    { id: '10', title: "Hit the Road Jack", artist: "Ray Charles", cover: "media2/Ray Charles.png", file: "media/Hit the Road Jack.mp3", popular: true,},
    //Рок
    { id: '11', title: "Bohemian Rhapsody", artist: "Queen", cover: "media2/Queen.png", file: "media/Queen.mp3", popular: false, genre: "rock"},
    { id: '12', title: "Thunder", artist: "Imagine Dragons", cover: "media2/Thunder.png", file: "media/Thunder.mp3", popular: false, genre: "rock"},
    { id: '13', title: "Believer", artist: "Imagine Dragons", cover: "media2/i.png", file: "media/Believer.mp3", popular: false, genre: "rock"},
    { id: '14', title: "Back In Black", artist: "AC/DC", cover: "media2/q.png", file: "media/ACDC.mp3", popular: false, genre: "rock"},
    { id: '15', title: "We Will Rock You", artist: "Queen", cover: "media2/2Queen.png", file: "media/2Queen.mp3", popular: false, genre: "rock"},
    //Поп
  
    //Funk
    { id: '16', title: "MONTAGEM BAILÃO", artist: "Repsaj", cover: "media2/200x200.png", file: "media/MZXI.mp3", popular: false, genre: "Funk"},
    { id: '17', title: "DIA DELÍCIA", artist: "Nakama, Mc Staff, ΣP", cover: "media2/2.png", file: "media/DIA DELÍCIA.mp3", popular: false, genre: "Funk"},
    { id: '18', title: "Montagem Bandido", artist: "Jmilton, Itamar Mc", cover: "media2/b2.png", file: "media/Montagem Bandido.mp3", popular: false, genre: "Funk"},
    { id: '19', title: "LUNA BALA", artist: "Yb Wasg'ood, Ariis", cover: "media2/3.png", file: "media/LUNA_BALA.mp3", popular: false, genre: "Funk"},
    { id: '20', title: "MONTAGEM TOMADA", artist: "MXZI", cover: "media2/0.png", file: "media/MONTAGEM TOMADA.mp3", popular: false, genre: "Funk"},
    //K-pop
  
    //Танцевальная
  
    //Современный
  
    //Метал
  
    //R&B
    
    //Рэп
  
    //Инди
  
  ];
  
  // Список жанров
  const genres = [
      { id: "rock", name: "Рок", icon: "fa-guitar" },
      { id: "pop", name: "Поп", icon: "fa-microphone" },
      { id: "Funk", name: "Funk", icon: "fa-sliders-h" },
      { id: "K-pop", name: "K-pop", icon: "fa-star" },
      { id: "Dance", name: "Танцевальная", icon: "fa-music" },
      { id: "Modern", name: "Современный", icon: "fa-bolt" },
      { id: "metal", name: "Метал", icon: "fa-drum" },
      { id: "R&B", name: "R&B", icon: "fa-moon" },
      { id: "rap", name: "Рэп", icon: "fa-comment" },
      { id: "indie", name: "Инди", icon: "fa-cloud" }
    ];
  
  const playbackSettings = {
    repeat: false,
    shuffle: false,
    currentPlaylist: null
  };
  
  const achievements = [
    { id: 'first_listen', title: 'Первый трек', description: 'Прослушал первый трек', icon: 'fa-music', condition: (user) => user.stats.tracksListened >= 1 },
    { id: 'playlist_creator', title: 'Создатель', description: 'Создал первый плейлист', icon: 'fa-list', condition: (user) => user.stats.playlistsCreated >= 1 },
    { id: 'music_lover', title: 'Любитель музыки', description: 'Прослушал 10 треков', icon: 'fa-heart', condition: (user) => user.stats.tracksListened >= 10 },
    { id: 'collector', title: 'Коллекционер', description: 'Создал 3 плейлиста', icon: 'fa-folder-plus', condition: (user) => user.stats.playlistsCreated >= 3 },
    { id: 'explorer', title: 'Исследователь', description: 'Прослушал все треки', icon: 'fa-globe', condition: (user) => user.stats.tracksListened >= tracks.length },
    { id: 'night_owl', title: 'Ночная сова', description: 'Слушал музыку после полуночи', icon: 'fa-moon', condition: (user) => user.stats.listenedAtNight },
    { id: 'early_bird', title: 'Жаворонок', description: 'Слушал музыку до 8 утра', icon: 'fa-sun', condition: (user) => user.stats.listenedInMorning },
    { id: 'marathon', title: 'Марафонец', description: 'Слушал музыку более 1 часа подряд', icon: 'fa-running', condition: (user) => user.stats.longestSession >= 60 },
    { id: 'taste_maker', title: 'Знаток', description: 'Добавил 10 треков в избранное', icon: 'fa-star', condition: (user) => user.likedTracks.length >= 10 },
    { id: 'veteran', title: 'Ветеран', description: 'Использует приложение более недели', icon: 'fa-award', condition: (user) => (new Date() - new Date(user.joinDate)) > 7 * 24 * 60 * 60 * 1000 }
  ];
  
  let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  let users = JSON.parse(localStorage.getItem('users')) || [{
    id: 1, 
    name: "Admin", 
    email: "admin@example.com", 
    password: hashCode("admin123"), 
    avatar: "A", 
    likedTracks: [],
    playlists: [],
    stats: { tracksListened: 0, playlistsCreated: 0, listenedAtNight: false, listenedInMorning: false, longestSession: 0, lastListenTime: null },
    joinDate: new Date().toISOString(),
    achievementsUnlocked: []
  }];
  
  let currentTrackIndex = 0;
  let isPlaying = false;
  let isMuted = false;
  let lastVolume = 0.7;
  let currentPlaylistId = null;
  let sessionStartTime = null;
  
  let audioPlayer = new Howl({
    src: [tracks[0].file],
    html5: true,
    volume: 0.7,
    onplay: function() { updatePlayButton(true); updateProgress(); sessionStartTime = new Date(); },
    onpause: function() { updatePlayButton(false); updateSessionDuration(); },
    onend: function() { handleTrackEnd(); updateSessionDuration(); },
    onloaderror: function(_, err) { console.error('Audio load error:', err); showNotification('Ошибка загрузки трека'); handleTrackEnd(); }
  });
  
  const elements = {
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    searchContainer: document.getElementById('search-container'),
    searchToggle: document.getElementById('search-toggle'),
    userPlaylistsContainer: document.getElementById('user-playlists-container'),
    createPlaylistBtn: document.getElementById('create-playlist-btn'),
    playlistModal: document.getElementById('playlist-modal'),
    addTrackModal: document.getElementById('add-track-modal'),
    savePlaylistBtn: document.getElementById('save-playlist-btn'),
    playBtn: document.getElementById('play-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    shuffleBtn: document.getElementById('shuffle-btn'),
    repeatBtn: document.getElementById('repeat-btn'),
    progressBar: document.getElementById('progress-bar'),
    currentTimeEl: document.getElementById('current-time'),
    durationEl: document.getElementById('duration'),
    currentCover: document.getElementById('current-cover'),
    currentTitle: document.getElementById('current-title'),
    currentArtist: document.getElementById('current-artist'),
    volumeBtn: document.getElementById('volume-btn'),
    volumeSlider: document.getElementById('volume-slider'),
    volumeIcon: document.getElementById('volume-icon'),
    likeBtn: document.getElementById('like-btn'),
    themeToggle: document.getElementById('theme-toggle'),
    closeButtons: document.querySelectorAll('.close'),
    popularTracksSection: document.querySelector('.popular-tracks'),
    userPlaylistsSection: document.querySelector('.user-playlists'),
    profileSection: document.getElementById('profile-section'),
    mainContainer: document.querySelector('main'),
    authModal: document.getElementById('auth-modal'),
    authBtn: document.getElementById('auth-btn'),
    loginBtn: document.getElementById('login-btn'),
    registerBtn: document.getElementById('register-btn'),
    logoutBtn: document.getElementById('logout-btn'),
    profileBtn: document.getElementById('profile-btn'),
    userProfile: document.getElementById('user-profile'),
    userAuth: document.getElementById('user-auth'),
    userAvatar: document.getElementById('user-avatar'),
    usernameDisplay: document.getElementById('username-display'),
    profileAvatar: document.getElementById('profile-avatar'),
    profileUsername: document.getElementById('profile-username'),
    tracksListened: document.getElementById('tracks-listened'),
    playlistsCreated: document.getElementById('playlists-created'),
    achievementsEarned: document.getElementById('achievements-earned'),
    achievementsGrid: document.getElementById('achievements-grid'),
    backFromProfile: document.getElementById('back-from-profile'),
    genresModal: document.getElementById('genres-modal'),
    genresContainer: document.getElementById('genres-container'),
    genresToggle: document.getElementById('genres-toggle'),
    backToGenres: document.getElementById('back-to-genres'),
    genreTracks: document.getElementById('genre-tracks'),
    genreTracksList: document.getElementById('genre-tracks-list'),
    currentGenreName: document.getElementById('current-genre-name'),
    genreSearch: document.getElementById('genre-search')
  };
  
  function initAuth() {
    if (currentUser) {
        showUserProfile(currentUser);
    } else {
        showAuthButton();
    }
    
    elements.authBtn.addEventListener('click', () => {
        elements.authModal.style.display = 'block';
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        
        document.getElementById('login-form').classList.add('active');
        document.querySelector('[data-tab="login"]').classList.add('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            document.querySelectorAll('.auth-form, .tab-btn').forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
            document.getElementById(`${tab}-form`).classList.add('active');
        });
    });
    
    elements.loginBtn.addEventListener('click', login);
    elements.registerBtn.addEventListener('click', register);
    elements.logoutBtn.addEventListener('click', logout);
    elements.profileBtn.addEventListener('click', openProfile);
    initPasswordToggles();
  }
  
  function initPasswordToggles() {
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', function() {
            const input = document.getElementById(this.getAttribute('data-target'));
            input.type = input.type === 'password' ? 'text' : 'password';
            this.classList.toggle('fa-eye-slash');
        });
    });
  }
  
  function login() {
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ['gmail.com', 'mail.ru', 'yandex.ru', 'yahoo.com', 'outlook.com'];
    
    // Проверка на латинские символы в пароле
  if (!/^[\x00-\x7F]*$/.test(password)) {
    errorElement.textContent = '✖ Пароль должен содержать латинские буквы';
    return;
  }

    if (!emailRegex.test(email)) {
        errorElement.textContent = '✖ Неверный формат email';
        return;
    }
    
    if (!allowedDomains.includes(email.split('@')[1])) {
        errorElement.textContent = `✖ Допускаются только: ${allowedDomains.join(', ')}`;
        return;
    }
    
    const user = users.find(u => u.email === email);
    if (user && user.password === hashCode(password)) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showUserProfile(user);
        elements.authModal.style.display = 'none';
        showNotification(`Добро пожаловать, ${user.name}!`);
        renderPlaylists();
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        errorElement.textContent = '';
    } else {
        errorElement.textContent = '✖ Неверный email или пароль';
    }
  }
  
  function register() {
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim().toLowerCase();
    const password = document.getElementById('register-password').value;
    const errorElement = document.getElementById('register-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ['gmail.com', 'mail.ru', 'yandex.ru', 'yahoo.com', 'outlook.com'];
    
    if (!name || !email || !password) {
        errorElement.textContent = '✖ Заполните все поля';
        return;
    }

    // Проверка на латинские символы в пароле
  if (!/^[\x00-\x7F]*$/.test(password)) {
    errorElement.textContent = '✖ Пароль должен содержать латинские буквы';
    return;
  }
    if (!emailRegex.test(email)) {
        errorElement.textContent = '✖ Неверный формат email';
        return;
    }
    
    if (!allowedDomains.includes(email.split('@')[1])) {
        errorElement.textContent = `✖ Разрешены только: ${allowedDomains.join(', ')}`;
        return;
    }
    
    if (password.length < 6) {
        errorElement.textContent = '✖ Пароль должен быть не менее 6 символов';
        return;
    }
    
    if (users.some(u => u.email === email)) {
        errorElement.textContent = '✖ Пользователь с таким email уже существует';
        return;
    }
  
    const newUser = {
        id: Date.now(),
        name,
        email,
        password: hashCode(password),
        avatar: name.charAt(0).toUpperCase(),
        likedTracks: [],
        playlists: [],
        stats: { tracksListened: 0, playlistsCreated: 0, listenedAtNight: false, listenedInMorning: false, longestSession: 0, lastListenTime: null },
        joinDate: new Date().toISOString(),
        achievementsUnlocked: []
    };
  
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    showUserProfile(newUser);
    elements.authModal.style.display = 'none';
    showNotification(`Добро пожаловать, ${name}!`);
    renderPlaylists();
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
    errorElement.textContent = '';
  }
  
  function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showAuthButton();
    showNotification('Вы вышли из аккаунта');
    renderPlaylists();
  }
  
  function showUserProfile(user) {
    elements.userAuth.style.display = 'none';
    elements.userProfile.style.display = 'flex';
    elements.usernameDisplay.textContent = user.name;
    elements.userAvatar.textContent = user.avatar;
  }
  
  function showAuthButton() {
    elements.userAuth.style.display = 'block';
    elements.userProfile.style.display = 'none';
  }
  
  function hashCode(str) {
    // Исправлено для работы с английскими буквами
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashArray = Array.from(new Uint8Array(data));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  
  function toggleLike(trackId) {
    if (!currentUser) { 
        showNotification('Войдите, чтобы ставить лайки'); 
        elements.authModal.style.display = 'block'; 
        return; 
    }
    
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
    
    if (currentUser.likedTracks.includes(trackId)) {
        currentUser.likedTracks = currentUser.likedTracks.filter(id => id !== trackId);
        showNotification('Лайк удалён');
    } else {
        currentUser.likedTracks.push(trackId);
        showNotification('Лайк поставлен');
    }
    
    users[userIndex] = currentUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateLikeButton(trackId);
    checkAchievements();
  }
  
  function updateLikeButton(trackId) {
    elements.likeBtn.innerHTML = currentUser?.likedTracks.includes(trackId) 
        ? '<i class="fas fa-heart" style="color: var(--primary-color)"></i>' 
        : '<i class="far fa-heart"></i>';
  }
  
  function handleTrackEnd() {
    if (playbackSettings.repeat) {
        audioPlayer.seek(0);
        audioPlayer.play();
    } else if (playbackSettings.shuffle) {
        playRandomTrack();
    } else {
        nextTrack();
    }
  }
  
  function playRandomTrack() {
    let availableTracks = [];
    
    if (playbackSettings.currentPlaylist) {
        const playlist = currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist);
        availableTracks = playlist.tracks
            .map(trackId => tracks.find(t => t.id === trackId))
            .filter(Boolean);
    } else {
        availableTracks = tracks;
    }
  
    if (availableTracks.length === 0) {
        showNotification('Плейлист пуст');
        return;
    }
  
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * availableTracks.length);
    } while (availableTracks.length > 1 && randomIndex === currentTrackIndex);
    
    currentTrackIndex = randomIndex;
    playTrack(availableTracks[currentTrackIndex].id);
  }
  
  function playTrack(trackId) {
    document.querySelectorAll('.play-btn i').forEach(icon => {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    });
    
    let trackList = [];
    
    if (playbackSettings.currentPlaylist) {
        const playlist = currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist);
        trackList = playlist.tracks
            .map(trackId => tracks.find(t => t.id === trackId))
            .filter(Boolean);
    } else {
        trackList = tracks;
    }
  
    const trackIndex = trackList.findIndex(t => t.id === trackId);
    if (trackIndex === -1) return;
    
    currentTrackIndex = trackIndex;
    const track = trackList[trackIndex];
  
    audioPlayer.unload();
    audioPlayer = new Howl({
        src: [track.file],
        html5: true,
        volume: isMuted ? 0 : lastVolume,
        onplay: () => {
            updatePlayButton(true);
            updateNowPlaying(track);
            updateProgress();
            updateListeningStats();
            sessionStartTime = new Date();
        },
        onpause: () => {
            updatePlayButton(false);
            updateSessionDuration();
        },
        onend: handleTrackEnd,
        onloaderror: (_, err) => {
            console.error('Audio load error:', err);
            showNotification('Ошибка загрузки трека');
            handleTrackEnd();
        }
    });
  
    audioPlayer.play();
    
    const activeBtn = document.querySelector(`.play-btn[data-id="${trackId}"] i`);
    if (activeBtn) {
        activeBtn.classList.remove('fa-play');
        activeBtn.classList.add('fa-pause');
    }
    updateLikeButton(trackId);
  }
  
  function togglePlay() {
    if (audioPlayer.playing()) {
        audioPlayer.pause();
        updateSessionDuration();
        const currentTrackId = tracks[currentTrackIndex]?.id;
        const playingBtn = document.querySelector(`.play-btn[data-id="${currentTrackId}"] i`);
        if (playingBtn) {
            playingBtn.classList.remove('fa-pause');
            playingBtn.classList.add('fa-play');
        }
    } else {
        audioPlayer.play();
        updateListeningStats();
        const currentTrackId = tracks[currentTrackIndex]?.id;
        const playingBtn = document.querySelector(`.play-btn[data-id="${currentTrackId}"] i`);
        if (playingBtn) {
            playingBtn.classList.remove('fa-play');
            playingBtn.classList.add('fa-pause');
        }
    }
  }
  
  function nextTrack() {
    let trackList = [];
    
    if (playbackSettings.currentPlaylist) {
        const playlist = currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist);
        trackList = playlist.tracks
            .map(trackId => tracks.find(t => t.id === trackId))
            .filter(Boolean);
    } else {
        trackList = tracks;
    }
  
    if (trackList.length === 0) {
        showNotification('Плейлист пуст');
        return;
    }
  
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    playTrack(trackList[currentTrackIndex].id);
  }
  
  function prevTrack() {
    let trackList = [];
    
    if (playbackSettings.currentPlaylist) {
        const playlist = currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist);
        trackList = playlist.tracks
            .map(trackId => tracks.find(t => t.id === trackId))
            .filter(Boolean);
    } else {
        trackList = tracks;
    }
  
    if (trackList.length === 0) {
        showNotification('Плейлист пуст');
        return;
    }
  
    currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    playTrack(trackList[currentTrackIndex].id);
  }
  
  function updatePlayButton(playing) {
    elements.playBtn.innerHTML = playing ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    isPlaying = playing;
  }
  
  function updateNowPlaying(track) {
    elements.currentTitle.textContent = track.title;
    elements.currentArtist.textContent = track.artist;
    elements.currentCover.src = track.cover;
  }
  
  function updateProgress() {
    if (!audioPlayer) return;
    
    const seek = audioPlayer.seek() || 0;
    const duration = audioPlayer.duration() || 1;
    
    elements.progressBar.value = (seek / duration) * 100;
    elements.currentTimeEl.textContent = formatTime(seek);
    elements.durationEl.textContent = formatTime(duration);
    
    if (audioPlayer.playing()) {
        requestAnimationFrame(updateProgress);
    }
  }
  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
  
  function setProgress() {
    if (!audioPlayer) return;
    
    const duration = audioPlayer.duration();
    const seek = (elements.progressBar.value / 100) * duration;
    audioPlayer.seek(seek);
  }
  
  function initVolumeControls() {
    const savedVolume = localStorage.getItem('volume');
    if (savedVolume !== null) {
        lastVolume = parseFloat(savedVolume);
        audioPlayer.volume(lastVolume);
        elements.volumeSlider.value = lastVolume * 100;
        updateVolumeIcon(lastVolume);
    }
  
    elements.volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        lastVolume = volume;
        audioPlayer.volume(volume);
        updateVolumeIcon(volume);
        isMuted = false;
        localStorage.setItem('volume', volume);
    });
  
    elements.volumeBtn.addEventListener('click', toggleMute);
  }
  
  function toggleMute() {
    isMuted = !isMuted;
    audioPlayer.volume(isMuted ? 0 : lastVolume);
    elements.volumeSlider.value = isMuted ? 0 : lastVolume * 100;
    updateVolumeIcon(isMuted ? 0 : lastVolume);
  }
  
  function updateVolumeIcon(volume) {
    if (volume === 0) {
        elements.volumeIcon.className = 'fas fa-volume-mute';
    } else if (volume < 0.33) {
        elements.volumeIcon.className = 'fas fa-volume-down';
    } else {
        elements.volumeIcon.className = 'fas fa-volume-up';
    }
  }
  
  function savePlaylists() {
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
    
    users[userIndex] = currentUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }
  
  function renderPlaylists() {
    elements.userPlaylistsContainer.innerHTML = '';
    
    if (!currentUser) {
        elements.userPlaylistsContainer.innerHTML = '<p class="empty">Войдите, чтобы видеть свои плейлисты</p>';
        return;
    }
  
    if (currentUser.playlists.length === 0) {
        elements.userPlaylistsContainer.innerHTML = '<p class="empty">У вас пока нет плейлистов</p>';
        return;
    }
  
    currentUser.playlists.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'playlist-card';
        playlistCard.dataset.id = playlist.id;
  
        if (playlist.tracks.length >= 4) {
            playlistCard.classList.add('mosaic');
            playlistCard.innerHTML = `
                <div class="playlist-menu" data-id="${playlist.id}"><i class="fas fa-ellipsis-h"></i></div>
                <div class="cover-grid">
                    ${playlist.tracks.slice(0,4).map(trackId => {
                        const track = tracks.find(t => t.id === trackId);
                        return `<img src="${track?.cover || 'default-cover.png'}" alt="Обложка">`;
                    }).join('')}
                </div>
                <h3>${playlist.name}</h3>
                <p>${playlist.tracks.length} треков</p>`;
        } else if (playlist.tracks.length > 0) {
            const firstTrack = tracks.find(t => t.id === playlist.tracks[0]);
            playlistCard.innerHTML = `
                <div class="playlist-menu" data-id="${playlist.id}"><i class="fas fa-ellipsis-h"></i></div>
                <img src="${firstTrack?.cover || 'default-cover.png'}" alt="${playlist.name}">
                <h3>${playlist.name}</h3>
                <p>${playlist.tracks.length} треков</p>`;
        } else {
            playlistCard.innerHTML = `
                <div class="playlist-menu" data-id="${playlist.id}"><i class="fas fa-ellipsis-h"></i></div>
                <img src="default-cover.png" alt="${playlist.name}">
                <h3>${playlist.name}</h3>
                <p>0 треков</p>`;
        }
  
        playlistCard.addEventListener('click', () => {
            playbackSettings.currentPlaylist = playlist.id;
            openPlaylist(playlist.id);
        });
  
        elements.userPlaylistsContainer.appendChild(playlistCard);
    });
  
    document.querySelectorAll('.playlist-menu').forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
            const playlistId = e.target.closest('.playlist-menu').dataset.id;
            if (confirm('Удалить этот плейлист?')) {
                currentUser.playlists = currentUser.playlists.filter(p => p.id !== playlistId);
                savePlaylists();
                renderPlaylists();
            }
        });
    });
  }
  
  function openPlaylist(playlistId) {
    const playlist = currentUser.playlists.find(p => p.id === playlistId);
    if (!playlist) return;
  
    playbackSettings.currentPlaylist = playlistId;
    elements.popularTracksSection.style.display = 'none';
    elements.userPlaylistsSection.style.display = 'none';
  
    const playlistView = document.createElement('div');
    playlistView.className = 'playlist-view';
    playlistView.dataset.playlistId = playlistId;
    
    playlistView.innerHTML = `
        <div class="playlist-header">
            <button class="back-button" id="back-to-playlists">
                <i class="fas fa-arrow-left"></i> Назад
            </button>
            <h2>${playlist.name}</h2>
            <button class="add-tracks-btn" data-id="${playlistId}">
                <i class="fas fa-plus"></i> Добавить треки
            </button>
        </div>
        <div class="track-list" id="playlist-tracks">
            ${playlist.tracks.length === 0 
                ? '<p class="empty">Плейлист пуст</p>' 
                : playlist.tracks.map(trackId => {
                    const track = tracks.find(t => t.id === trackId);
                    return `
                        <div class="track-item" data-id="${track.id}">
                            <img src="${track.cover}" class="track-cover">
                            <div class="track-info">
                                <h4>${track.title}</h4>
                                <p>${track.artist}</p>
                            </div>
                            <div class="track-actions">
                                <button class="play-btn" data-id="${track.id}">
                                    <i class="fas fa-play"></i>
                                </button>
                                <button class="remove-from-playlist-btn" data-id="${track.id}">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>`;
                }).join('')}
        </div>`;
  
    elements.mainContainer.appendChild(playlistView);
  
    document.getElementById('back-to-playlists').addEventListener('click', () => {
        playbackSettings.currentPlaylist = null;
        playlistView.remove();
        elements.popularTracksSection.style.display = 'block';
        elements.userPlaylistsSection.style.display = 'block';
        renderPlaylists();
    });
  
    document.querySelector('.add-tracks-btn').addEventListener('click', () => {
        currentPlaylistId = playlistId;
        openAddTrackModal();
    });
  
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const trackId = e.target.closest('button').dataset.id;
            playTrack(trackId);
        });
    });
  
    document.querySelectorAll('.remove-from-playlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const trackId = e.target.closest('button').dataset.id;
            removeTrackFromPlaylist(playlistId, trackId);
        });
    });
  }
  
  function openAddTrackModal() {
    const playlist = currentUser.playlists.find(p => p.id === currentPlaylistId);
    if (!playlist) return;
  
    document.getElementById('modal-playlist-name').textContent = playlist.name;
    const availableTracks = document.getElementById('available-tracks');
    const carouselNav = document.getElementById('carousel-nav');
    
    availableTracks.innerHTML = '<div class="loading-indicator"><i class="fas fa-spinner"></i> Загрузка треков...</div>';
    carouselNav.innerHTML = '';
  
    const available = tracks.filter(track => !playlist.tracks.includes(track.id));
    
    if (available.length === 0) {
        availableTracks.innerHTML = '<p class="empty">Нет доступных треков для добавления</p>';
        return;
    }
  
    availableTracks.innerHTML = '';
    
    available.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.className = 'track-carousel-item';
        trackElement.innerHTML = `
            <img src="${track.cover}" class="carousel-track-cover" alt="${track.title}">
            <div class="carousel-track-info">
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
            </div>
            <button class="add-track-btn" data-id="${track.id}" title="Добавить в плейлист">
                <i class="fas fa-plus"></i>
            </button>
        `;
        availableTracks.appendChild(trackElement);
        
        if (index === 0) {
            const navBtn = document.createElement('button');
            navBtn.className = 'carousel-nav-btn active';
            navBtn.dataset.index = index;
            carouselNav.appendChild(navBtn);
        }
  
        trackElement.querySelector('.add-track-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const trackId = e.target.closest('button').dataset.id;
            if (addTrackToPlaylist(currentPlaylistId, trackId)) {
                showNotification(`Трек "${track.title}" добавлен в плейлист`);
                elements.addTrackModal.style.display = 'none';
            }
        });
    });
  
    initCarouselNavigation();
    
    elements.addTrackModal.style.display = 'block';
  }
  
  function initCarouselNavigation() {
    const carousel = document.querySelector('.track-carousel');
    const navButtons = document.querySelectorAll('.carousel-nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            carousel.scrollTo({
                left: index * 200,
                behavior: 'smooth'
            });
            
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
  }
  
  function addTrackToPlaylist(playlistId, trackId) {
    const playlist = currentUser.playlists.find(p => p.id === playlistId);
    const track = tracks.find(t => t.id === trackId);
    
    if (!playlist || !track) return false;
    
    if (playlist.tracks.includes(trackId)) {
        showNotification(`Трек "${track.title}" уже есть в плейлисте`);
        return false;
    }
  
    playlist.tracks.push(trackId);
    if (!playlist.cover) {
        playlist.cover = track.cover;
    }
    
    savePlaylists();
    updatePlaylistView(playlistId, track);
    renderPlaylists();
    checkAchievements();
    return true;
  }
  
  function updatePlaylistView(playlistId, track) {
    const playlistView = document.querySelector(`.playlist-view[data-playlist-id="${playlistId}"]`);
    if (!playlistView) return;
  
    const tracksContainer = playlistView.querySelector('#playlist-tracks');
    const emptyMessage = playlistView.querySelector('.empty');
    
    if (emptyMessage) {
        tracksContainer.innerHTML = '';
    }
  
    const trackElement = document.createElement('div');
    trackElement.className = 'track-item';
    trackElement.dataset.id = track.id;
    trackElement.innerHTML = `
        <img src="${track.cover}" class="track-cover">
        <div class="track-info">
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        </div>
        <div class="track-actions">
            <button class="play-btn" data-id="${track.id}">
                <i class="fas fa-play"></i>
            </button>
            <button class="remove-from-playlist-btn" data-id="${track.id}">
                <i class="fas fa-times"></i>
            </button>
        </div>`;
  
    tracksContainer.appendChild(trackElement);
    
    trackElement.querySelector('.play-btn').addEventListener('click', (e) => {
        playTrack(e.target.closest('button').dataset.id);
    });
  
    trackElement.querySelector('.remove-from-playlist-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        removeTrackFromPlaylist(playlistId, e.target.closest('button').dataset.id);
    });
  }
  
  function removeTrackFromPlaylist(playlistId, trackId) {
    const playlist = currentUser.playlists.find(p => p.id === playlistId);
    if (!playlist) return;
  
    const trackIndex = playlist.tracks.indexOf(trackId);
    if (trackIndex === -1) return;
  
    playlist.tracks.splice(trackIndex, 1);
    savePlaylists();
  
    const playlistView = document.querySelector(`.playlist-view[data-playlist-id="${playlistId}"]`);
    if (playlistView) {
        const tracksContainer = playlistView.querySelector('#playlist-tracks');
        if (playlist.tracks.length === 0) {
            tracksContainer.innerHTML = '<p class="empty">Плейлист пуст</p>';
        } else {
            const trackElement = tracksContainer.querySelector(`.track-item[data-id="${trackId}"]`);
            if (trackElement) {
                trackElement.remove();
            }
        }
    }
  
    renderPlaylists();
    showNotification(`Трек "${tracks.find(t => t.id === trackId)?.title}" удален из плейлиста`);
  }
  
  const debouncedSearch = _.debounce(searchTracks, 300);
  
  function searchTracks(query) {
    const normalizedQuery = query.trim().toLowerCase();
    
    if (!normalizedQuery) {
        elements.searchResults.style.display = 'none';
        return;
    }
  
    const results = tracks.filter(track => 
        track.title.toLowerCase().includes(normalizedQuery) ||
        track.artist.toLowerCase().includes(normalizedQuery)
    );
  
    displaySearchResults(results);
  }
  
  function displaySearchResults(results) {
    const fragment = document.createDocumentFragment();
    
    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'Ничего не найдено';
        fragment.appendChild(noResults);
    } else {
        results.slice(0, 5).forEach(track => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <img src="${track.cover}" class="search-result-cover">
                <div class="search-result-info">
                    <h4>${track.title}</h4>
                    <p>${track.artist}</p>
                </div>`;
            item.addEventListener('click', () => {
                playTrack(track.id);
                elements.searchResults.style.display = 'none';
            });
            fragment.appendChild(item);
        });
    }
  
    elements.searchResults.innerHTML = '';
    elements.searchResults.appendChild(fragment);
    elements.searchResults.style.display = 'block';
  }
  
  function renderPopularTracks() {
    const popularTracks = tracks.filter(track => track.popular);
    const container = document.getElementById('popular-tracks');
    
    container.innerHTML = popularTracks.map(track => `
        <div class="track-item" data-id="${track.id}">
            <img src="${track.cover}" class="track-cover">
            <div class="track-info">
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
            </div>
            <div class="track-actions">
                <button class="play-btn" data-id="${track.id}">
                    <i class="fas fa-play"></i>
                </button>
                <button class="add-to-playlist-btn" data-id="${track.id}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>`).join('');
  
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const trackId = e.target.closest('button').dataset.id;
            playTrack(trackId);
        });
    });
  
    document.querySelectorAll('.add-to-playlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!currentUser) {
                showNotification('Войдите, чтобы добавлять треки');
                elements.authModal.style.display = 'block';
                return;
            }
            const trackId = e.target.closest('button').dataset.id;
            showPlaylistSelection(trackId);
        });
    });
  }
  
  function showPlaylistSelection(trackId) {
    if (currentUser.playlists.length === 0) {
        showNotification('Сначала создайте плейлист!');
        elements.playlistModal.style.display = 'block';
        return;
    }
  
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Добавить в плейлист</h3>
            <div class="playlist-selection">
                ${currentUser.playlists.map(playlist => `
                    <div class="playlist-option" data-id="${playlist.id}">
                        ${playlist.tracks.length > 0 
                            ? `<img src="${tracks.find(t => t.id === playlist.tracks[0])?.cover || 'default-cover.png'}" class="playlist-option-cover">`
                            : `<div class="playlist-option-cover"><i class="fas fa-music"></i></div>`}
                        <div class="playlist-option-info">
                            <h4>${playlist.name}</h4>
                            <p>${playlist.tracks.length} треков</p>
                        </div>
                    </div>`).join('')}
            </div>
        </div>`;
  
    document.body.appendChild(modal);
    modal.style.display = 'block';
  
    modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
    });
  
    modal.querySelectorAll('.playlist-option').forEach(option => {
        option.addEventListener('click', () => {
            const playlistId = option.dataset.id;
            if (addTrackToPlaylist(playlistId, trackId)) {
                modal.remove();
            }
        });
    });
  }
  
  function openProfile() {
    hideAllSections();
    elements.profileSection.style.display = 'block';
  
    if (!currentUser) return;
  
    elements.profileUsername.textContent = currentUser.name;
    elements.profileAvatar.textContent = currentUser.avatar;
    elements.tracksListened.textContent = currentUser.stats.tracksListened || 0;
    elements.playlistsCreated.textContent = currentUser.stats.playlistsCreated || 0;
    renderAchievements();
  }
  
  function renderAchievements() {
    const grid = elements.achievementsGrid;
    grid.innerHTML = '';
  
    if (!currentUser) return;
  
    let earnedCount = 0;
    achievements.forEach(achievement => {
        const isUnlocked = currentUser.achievementsUnlocked.includes(achievement.id);
        if (isUnlocked) earnedCount++;
  
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <div class="achievement-icon"><i class="fas ${achievement.icon}"></i></div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-desc">${achievement.description}</div>`;
        grid.appendChild(card);
    });
  
    elements.achievementsEarned.textContent = `${earnedCount}/${achievements.length}`;
  }
  
  function updateListeningStats() {
    if (!currentUser) return;
  
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
  
    users[userIndex].stats.tracksListened++;
    const now = new Date();
    const hours = now.getHours();
  
    if (hours >= 0 && hours < 8) {
        users[userIndex].stats.listenedInMorning = true;
    }
  
    if (hours >= 23 || hours < 5) {
        users[userIndex].stats.listenedAtNight = true;
    }
  
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = users[userIndex];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    checkAchievements();
  }
  
  function updateSessionDuration() {
    if (!sessionStartTime || !currentUser) return;
  
    const now = new Date();
    const duration = (now - sessionStartTime) / 1000 / 60;
    sessionStartTime = null;
  
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
  
    if (duration > users[userIndex].stats.longestSession) {
        users[userIndex].stats.longestSession = duration;
        localStorage.setItem('users', JSON.stringify(users));
        currentUser = users[userIndex];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (duration >= 60) {
            checkAchievements();
        }
    }
  }
  
  function checkAchievements() {
    if (!currentUser) return;
  
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
  
    achievements.forEach(achievement => {
        const wasUnlocked = currentUser.achievementsUnlocked.includes(achievement.id);
        const isUnlockedNow = achievement.condition(currentUser);
  
        if (isUnlockedNow && !wasUnlocked) {
            users[userIndex].achievementsUnlocked.push(achievement.id);
            showNotification(`Достижение получено: ${achievement.title} - ${achievement.description}`);
            localStorage.setItem('users', JSON.stringify(users));
            currentUser = users[userIndex];
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    });
  }
  
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
  
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 2000);
  }
  
  function initPlayerControls() {
    elements.playBtn.addEventListener('click', togglePlay);
    elements.nextBtn.addEventListener('click', nextTrack);
    elements.prevBtn.addEventListener('click', prevTrack);
    elements.progressBar.addEventListener('input', setProgress);
  
    elements.repeatBtn.addEventListener('click', () => {
        playbackSettings.repeat = !playbackSettings.repeat;
        elements.repeatBtn.innerHTML = playbackSettings.repeat
            ? '<i class="fas fa-redo" style="color: var(--primary-color)"></i>'
            : '<i class="fas fa-redo"></i>';
    });
  
    elements.shuffleBtn.addEventListener('click', () => {
        playbackSettings.shuffle = !playbackSettings.shuffle;
        elements.shuffleBtn.innerHTML = playbackSettings.shuffle
            ? '<i class="fas fa-random" style="color: var(--primary-color)"></i>'
            : '<i class="fas fa-random"></i>';
    });
  }
  
  function renderGenres() {
    elements.genresContainer.innerHTML = '';
    
    // Подсчет количества треков по жанрам
    const genreCounts = {};
    tracks.forEach(track => {
        if (track.genre) {
            genreCounts[track.genre] = (genreCounts[track.genre] || 0) + 1;
        }
    });
    
    genres.forEach(genre => {
        const count = genreCounts[genre.id] || 0;
        
        const genreCard = document.createElement('div');
        genreCard.className = 'genre-card';
        genreCard.dataset.id = genre.id;
        genreCard.innerHTML = `
            <div class="genre-icon"><i class="fas ${genre.icon}"></i></div>
            <div class="genre-title">${genre.name}</div>
            <div class="genre-count">${count} треков</div>
        `;
        
        genreCard.addEventListener('click', () => {
            showGenreTracks(genre.id);
        });
        
        elements.genresContainer.appendChild(genreCard);
    });
  }
  
  function showGenreTracks(genreId) {
    const genre = genres.find(g => g.id === genreId);
    if (!genre) return;
    
    elements.genresContainer.style.display = 'none';
    elements.genreTracks.style.display = 'block';
    
    elements.currentGenreName.innerHTML = `
        <i class="fas ${genre.icon}"></i> ${genre.name}
    `;
    
    elements.genreTracksList.innerHTML = '';
    
    const genreTracksList = tracks.filter(track => track.genre === genreId);
    
    if (genreTracksList.length === 0) {
        elements.genreTracksList.innerHTML = '<p class="empty">В этом жанре пока нет треков</p>';
        return;
    }
    
    genreTracksList.forEach(track => {
        const trackItem = document.createElement('div');
        trackItem.className = 'track-item';
        trackItem.dataset.id = track.id;
        trackItem.innerHTML = `
            <img src="${track.cover}" class="track-cover">
            <div class="track-info">
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
            </div>
            <div class="track-actions">
                <button class="play-btn" data-id="${track.id}">
                    <i class="fas fa-play"></i>
                </button>
                <button class="add-to-playlist-btn" data-id="${track.id}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
        
        trackItem.querySelector('.play-btn').addEventListener('click', (e) => {
            const trackId = e.target.closest('button').dataset.id;
            playTrack(trackId);
        });
        
        trackItem.querySelector('.add-to-playlist-btn').addEventListener('click', (e) => {
            if (!currentUser) {
                showNotification('Войдите, чтобы добавлять треки');
                elements.authModal.style.display = 'block';
                return;
            }
            const trackId = e.target.closest('button').dataset.id;
            showPlaylistSelection(trackId);
        });
        
        elements.genreTracksList.appendChild(trackItem);
    });
  }
  
  function openGenresModal() {
    renderGenres();
    elements.genresModal.style.display = 'block';
    
    // Поиск по жанрам
    elements.genreSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.genre-card').forEach(card => {
            const genreName = card.querySelector('.genre-title').textContent.toLowerCase();
            card.style.display = genreName.includes(searchTerm) ? 'block' : 'none';
        });
    });
  }
  
  function hideAllSections() {
    elements.popularTracksSection.style.display = 'none';
    elements.userPlaylistsSection.style.display = 'none';
    elements.profileSection.style.display = 'none';
    
    // Удаляем открытые плейлисты
    document.querySelectorAll('.playlist-view').forEach(view => view.remove());
  }
  
  function init() {
    const oldPlaylists = JSON.parse(localStorage.getItem('playlists'));
    if (oldPlaylists) {
        users.forEach(user => {
            user.playlists = oldPlaylists.filter(p => p.ownerId === user.id);
        });
        localStorage.removeItem('playlists');
    }
  
    initAuth();
    initPlayerControls();
    initVolumeControls();
  
    elements.searchToggle.addEventListener('click', (e) => {
      e.preventDefault();
      elements.searchContainer.style.display = 'block';
      elements.searchInput.focus();
  });
  
    elements.createPlaylistBtn.addEventListener('click', () => {
        if (!currentUser) {
            showNotification('Войдите, чтобы создавать плейлисты');
            elements.authModal.style.display = 'block';
            return;
        }
        elements.playlistModal.style.display = 'block';
    });
  
    elements.savePlaylistBtn.addEventListener('click', () => {
        const playlistName = document.getElementById('playlist-name').value.trim();
        if (!playlistName) {
            showNotification('Введите название плейлиста');
            return;
        }
  
        currentUser.playlists.push({
            id: Date.now().toString(),
            name: playlistName,
            tracks: [],
            cover: tracks[currentTrackIndex]?.cover || null
        });
  
        currentUser.stats.playlistsCreated++;
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
        renderPlaylists();
        elements.playlistModal.style.display = 'none';
        document.getElementById('playlist-name').value = '';
        showNotification(`Плейлист "${playlistName}" создан!`);
        checkAchievements();
    });
  
    elements.likeBtn.addEventListener('click', () => {
        const currentTrack = playbackSettings.currentPlaylist
            ? currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist).tracks[currentTrackIndex]
            : tracks[currentTrackIndex].id;
        toggleLike(currentTrack);
    });
  
    elements.themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        elements.themeToggle.innerHTML = document.body.classList.contains('light-theme')
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    });
  
    elements.closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
  
    elements.genresToggle.addEventListener('click', (e) => {
        e.preventDefault();
        openGenresModal();
    });
  
    elements.backToGenres.addEventListener('click', () => {
        elements.genreTracks.style.display = 'none';
        elements.genresContainer.style.display = 'grid';
    });
  
    elements.searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
  
    elements.backFromProfile.addEventListener('click', () => {
        hideAllSections();
        elements.popularTracksSection.style.display = 'block';
        elements.userPlaylistsSection.style.display = 'block';
    });
  
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container') && !e.target.closest('#search-toggle')) {
            elements.searchContainer.style.display = 'none';
            elements.searchResults.style.display = 'none';
        }
  
        if (e.target === elements.playlistModal) {
            elements.playlistModal.style.display = 'none';
        }
        if (e.target === elements.addTrackModal) {
            elements.addTrackModal.style.display = 'none';
        }
        if (e.target === elements.authModal) {
            elements.authModal.style.display = 'none';
        }
        if (e.target === elements.genresModal) {
            elements.genresModal.style.display = 'none';
        }
    });
  
    renderPopularTracks();
    renderPlaylists();
    updateNowPlaying(tracks[0]);
    updateLikeButton(tracks[0].id);
  }
  
  document.addEventListener('DOMContentLoaded', init);