// Restricts input for the set of matched elements to the given inputFilter function.
(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));

$(document).ready(function () {
    if ($('[name="quantity"]').length) {
        $('[name="quantity"]').inputFilter(function (value) {
            return /^-?\d*$/.test(value);
        });

        $('[name="quantity"]').bind('change keyup keydown cut copy paste', function () {
            var now_val = $(this).val(),
                now_val = parseInt(now_val);

            if (now_val < 1 || $('[name="quantity"]').val() == '') {
                $('#harga').removeAttr('style').html('Rp. 0,-');
                return false;
            }

            if ($('[name="nominal"]:checked').length > 0) {
                var harga = $('[name="nominal"]:checked').val(),
                    harga = parseInt(harga * now_val) + '',
                    harga = formatRupiah(harga, 'Rp. ') + ',-';
                $('#harga').removeAttr('style').html(harga);
            }
        });
    }

    if ($('.quantity-button-handler').length) {
        $('.quantity-button-handler').first().on('click', function (e) {
            e.preventDefault();

            var now_val = $('[name="quantity"]').val(),
                now_val = parseInt(now_val),
                now_val = ($('[name="quantity"]').val() == '') ? 2 : now_val,
                min_val = (now_val - 1);

            if (now_val <= 1) {
                return false;
            } else {
                $('[name="quantity"]').val(min_val);
            }

            if ($('[name="nominal"]:checked').length > 0) {
                var harga = $('[name="nominal"]:checked').val(),
                    harga = parseInt(harga * min_val) + '',
                    harga = formatRupiah(harga, 'Rp. ') + ',-';
                $('#harga').removeAttr('style').html(harga);
            }
        });

        $('.quantity-button-handler').last().on('click', function (e) {
            e.preventDefault();

            var now_val = $('[name="quantity"]').val(),
                now_val = parseInt(now_val),
                now_val = ($('[name="quantity"]').val() == '') ? 0 : now_val,
                add_val = (now_val + 1);

            if (now_val >= 500) {
                return false;
            } else {
                $('[name="quantity"]').val(add_val);
            }

            if ($('[name="nominal"]:checked').length > 0) {
                var harga = $('[name="nominal"]:checked').val(),
                    harga = parseInt(harga * add_val) + '',
                    harga = formatRupiah(harga, 'Rp. ') + ',-';
                $('#harga').removeAttr('style').html(harga);
            }
        });
    }

    if ($('#availablepackages').length) {
        $('#availablepackages').on('click', '#packagevariant', function (e) {
            e.preventDefault();
            var $this = $(this);

            $('#packagevariant label').removeClass('active');
            $this.children().addClass('active');

            $this.find('input').prop('checked', true);
            $('[name="quantity"]').val('1');

            var harga = $this.find('input').val(),
                harga = formatRupiah(harga, 'Rp. '),
                harga = harga + ',-';

            $('#harga').removeAttr('style').html(harga);
        });
    }

    if ($('#shop-body').length) {
        if ($('[name="game_id"]').length) {
            $('#shop-body').on('submit', function (e) {
                var nominal = $('[name="nominal"]:checked').length,
                    gameid = $('[name="game_id"]').val(),
                    idchecker = $('#id_checker'),
                    gamenick = $('[name="game_nick"]').val(),
                    server = $('select[name="server"] option').filter(':selected').val(),
                    qty = $('[name="quantity"]').val();

                if (
                    (idchecker.length && (gamenick === null || gamenick.trim() === '')) ||
                    ($('select[name="server"]').length && (server === null || server.trim() === ''))
                ) {
                    return false;
                }

                if (gameid.trim() !== '' && nominal > 0 && qty > 0) {
                    $('#shop-body').submit();
                } else {
                    return false;
                }
            });

            setInterval(function () {
                var nominal = $('[name="nominal"]:checked').length,
                    gameid = $('[name="game_id"]').val(),
                    idchecker = $('#id_checker'),
                    gamenick = $('[name="game_nick"]').val(),
                    server = $('select[name="server"] option').filter(':selected').val(),
                    qty = $('[name="quantity"]').val(),
                    total = ($('[name="nominal"]:checked').val() * qty);

                if (
                    (idchecker.length && (gamenick === null || gamenick.trim() === '')) ||
                    ($('select[name="server"]').length && (server === null || server.trim() === ''))
                ) {
                    return false;
                }

                if (gameid.trim() !== '' && nominal > 0 && qty > 0 && total < 10000) {
                    $('[type="submit"]').attr('disabled', 'disabled');
                    $('[type="submit"]').first().removeAttr('disabled');
                } else if (gameid.trim() !== '' && total >= 10000) {
                    $('[type="submit"]').removeAttr('disabled');
                } else {
                    $('[type="submit"]').attr('disabled', 'disabled');
                }
            }, 500);
        } else {
            $('#shop-body').on('submit', function (e) {
                var nominal = $('[name="nominal"]:checked').length,
                    qty = $('[name="quantity"]').val();

                if (nominal > 0 && qty > 0) {
                    $('#shop-body').submit();
                } else {
                    return false;
                }
            });

            setInterval(function () {
                var nominal = $('[name="nominal"]:checked').length,
                    qty = $('[name="quantity"]').val(),
                    total = ($('[name="nominal"]:checked').val() * qty);

                if (nominal > 0 && qty > 0 && total < 10000) {
                    $('[type="submit"]').attr('disabled', 'disabled');
                    $('[type="submit"]').first().removeAttr('disabled');
                } else if (total >= 10000) {
                    $('[type="submit"]').removeAttr('disabled');
                } else {
                    $('[type="submit"]').attr('disabled', 'disabled');
                }
            }, 500);
        }
    }

    if ($('#id_checker').length) {
        function id_checker() {
            var checker = $('#id_checker').val(),
                id_game = $('#game_id').val(),
                server = $('#server');

            // Ragnarok M Eternal Love
            if (server.length) {
                var id_server = server.val();
            }

            // Mobile Legends: Bang Bang
            if (checker == '3') {
                var mlbb = id_game.split('(')
                id_game = mlbb[0].trim()

                if (mlbb[1] === undefined) {
                    Swal.fire({
                        icon: 'error',
                        text: 'ID Game tidak dapat ditemukan',
                        didOpen: () => {
                            Swal.hideLoading();
                        }
                    });

                    return;
                }
                var id_server = mlbb[1].split(')')[0].trim()
            }

            if (id_game !== null && id_game.trim() !== '') {
                Swal.fire({
                    text: 'Tunggu sebentar...',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                var data = {
                    'csrf_teknowebapp_dev': getCookie('csrf_developer_ganteng'),
                    'game': checker,
                    'id': id_game
                };

                if (server.length && (id_server === undefined || id_server.trim() === '')) {
                    Swal.close();

                    Swal.fire({
                        icon: 'error',
                        text: 'Server tidak boleh kosong',
                        didOpen: () => {
                            Swal.hideLoading();
                        }
                    });

                    return;
                }

                if (id_server !== undefined) {
                    data['server'] = id_server;
                }

                $.ajax({
                    type: "POST",
                    url: "/welcome/idchecker",
                    dataType: "JSON",
                    data,
                    success: function (response) {
                        Swal.close();

                        var is_exist = response.data.exist,
                            nick = response.data.nick;

                        if (is_exist === false) {
                            $('#game_id').val('');

                            Swal.fire({
                                icon: 'error',
                                text: 'ID Game tidak dapat ditemukan'
                            });
                        } else {
                            $('#game_nick').val(nick);
                        }
                    },
                    error: function (error) {
                        Swal.close();

                        if (error.status !== 400) {
                            console.log(error.statusText)

                            Swal.fire({
                                icon: 'error',
                                html: 'Terjadi kesalahan pada server<br>Silahkan hubungi administrator'
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                text: error.responseJSON.message
                            });
                        }
                    }
                });
            }
        }

        // $('#game_id').focusout(id_checker);
        $('#check_game button').click(id_checker);
        $('#game_id').on('keyup', function (e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                id_checker();
            }
        });
    }

    let form = $('form[method="post"]');
    if (form.length) {
        setInterval(function () {
            let csrf_value = getCookie('csrf_developer_ganteng');

            form.find('input[name="csrf_teknowebapp_dev"]').val(csrf_value);
        }, 100);
    }
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
