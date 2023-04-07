let run = true, time_step = 1000;
const wait = (n = 1) => new Promise((rs, rj) => run ? setTimeout(rs, n) : rj()),
    click = async (cn, i = 0) => {
        document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a")[i].click();
        return wait(time_step)
    };
document.onkeydown = (e = window.event) => {
    if (e.key === "a") run = run ? true : explore() || true;
    else if (e.key === "z") console.log(time_step *= 0.9);
    else if (e.key === "x") console.log(time_step *= 1.1);
    else run = false;
};
const explore = async () =>
    click("recCard__info").then(() =>
        Array.from(document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a")).reduce((p, e) =>
            p.then(() => {
                e.click();
                return wait(time_step)
            }), Promise.resolve())
    ).then(() =>
        click("recsGamepad__button--like")
    ).then(() => explore());
explore();
